import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Hands, HAND_CONNECTIONS } from '@mediapipe/hands';
import { Camera } from '@mediapipe/camera_utils';

/**
 * Real AR Viewer with Three.js 3D models and MediaPipe hand tracking
 * This actually shows watches on the wrist like Cartier's implementation
 */
function RealARViewer({ watchModel, onClose }) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [handDetected, setHandDetected] = useState(false);
  const [cameraReady, setCameraReady] = useState(false);
  const [handsReady, setHandsReady] = useState(false);
  
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const threeCanvasRef = useRef(null);
  
  const sceneRef = useRef(null);
  const cameraThreeRef = useRef(null);
  const rendererRef = useRef(null);
  const watchMeshRef = useRef(null);
  const handsRef = useRef(null);
  const cameraUtilsRef = useRef(null);
  const animationFrameRef = useRef(null);
  const wristPositionRef = useRef({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    initializeAR();
    return () => {
      cleanup();
    };
  }, []);

  const cleanup = () => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    if (cameraUtilsRef.current) {
      cameraUtilsRef.current.stop();
    }
    if (handsRef.current) {
      handsRef.current.close();
    }
    if (rendererRef.current) {
      rendererRef.current.dispose();
    }
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = videoRef.current.srcObject.getTracks();
      tracks.forEach(track => track.stop());
    }
  };

  const initializeAR = async () => {
    try {
      setIsLoading(true);
      setError(null);

      // Step 1: Initialize camera
      await initializeCamera();
      
      // Step 2: Initialize MediaPipe Hands
      await initializeHandTracking();
      
      // Step 3: Initialize Three.js scene
      initializeThreeJS();
      
      setIsLoading(false);
    } catch (err) {
      console.error('AR initialization error:', err);
      setError(`Failed to initialize AR: ${err.message}`);
      setIsLoading(false);
    }
  };

  const initializeCamera = async () => {
    return new Promise(async (resolve, reject) => {
      try {
        const constraints = {
          video: {
            facingMode: { ideal: 'environment' },
            width: { ideal: 1280 },
            height: { ideal: 720 }
          }
        };

        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.onloadedmetadata = () => {
            videoRef.current.play();
            setCameraReady(true);
            resolve();
          };
        }
      } catch (err) {
        reject(new Error(`Camera access failed: ${err.message}`));
      }
    });
  };

  const initializeHandTracking = async () => {
    return new Promise((resolve, reject) => {
      try {
        const hands = new Hands({
          locateFile: (file) => {
            return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
          }
        });

        hands.setOptions({
          maxNumHands: 2,
          modelComplexity: 1,
          minDetectionConfidence: 0.5,
          minTrackingConfidence: 0.5
        });

        hands.onResults(onHandsResults);

        handsRef.current = hands;

        // Initialize camera utils
        if (videoRef.current) {
          const camera = new Camera(videoRef.current, {
            onFrame: async () => {
              if (videoRef.current && handsRef.current) {
                await handsRef.current.send({ image: videoRef.current });
              }
            },
            width: 1280,
            height: 720
          });

          camera.start();
          cameraUtilsRef.current = camera;
          setHandsReady(true);
          resolve();
        }
      } catch (err) {
        reject(new Error(`Hand tracking initialization failed: ${err.message}`));
      }
    });
  };

  const onHandsResults = (results) => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = results.image.width;
    canvas.height = results.image.height;

    // Draw the camera feed
    ctx.save();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(results.image, 0, 0, canvas.width, canvas.height);

    if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
      setHandDetected(true);
      
      for (const landmarks of results.multiHandLandmarks) {
        // Draw hand landmarks
        drawHandLandmarks(ctx, landmarks, canvas.width, canvas.height);
        
        // Get wrist position (landmark 0)
        const wrist = landmarks[0];
        updateWristPosition(wrist, canvas.width, canvas.height);
      }
    } else {
      setHandDetected(false);
    }

    ctx.restore();
  };

  const drawHandLandmarks = (ctx, landmarks, width, height) => {
    // Draw connections
    ctx.strokeStyle = 'rgba(0, 255, 0, 0.5)';
    ctx.lineWidth = 2;

    for (const connection of HAND_CONNECTIONS) {
      const start = landmarks[connection[0]];
      const end = landmarks[connection[1]];
      
      ctx.beginPath();
      ctx.moveTo(start.x * width, start.y * height);
      ctx.lineTo(end.x * width, end.y * height);
      ctx.stroke();
    }

    // Draw landmarks
    landmarks.forEach((landmark, index) => {
      ctx.beginPath();
      ctx.arc(
        landmark.x * width,
        landmark.y * height,
        index === 0 ? 8 : 4, // Wrist is larger
        0,
        2 * Math.PI
      );
      ctx.fillStyle = index === 0 ? '#FFD700' : 'rgba(255, 255, 255, 0.8)';
      ctx.fill();
      ctx.strokeStyle = '#000';
      ctx.lineWidth = 1;
      ctx.stroke();
    });
  };

  const updateWristPosition = (wrist, width, height) => {
    wristPositionRef.current = {
      x: (wrist.x - 0.5) * 2, // Convert to Three.js coordinates
      y: -(wrist.y - 0.5) * 2,
      z: -wrist.z * 2
    };
  };

  const initializeThreeJS = () => {
    if (!threeCanvasRef.current) return;

    // Create scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Create camera
    const camera = new THREE.PerspectiveCamera(
      75,
      threeCanvasRef.current.clientWidth / threeCanvasRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 2;
    cameraThreeRef.current = camera;

    // Create renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: threeCanvasRef.current,
      alpha: true,
      antialias: true
    });
    renderer.setSize(
      threeCanvasRef.current.clientWidth,
      threeCanvasRef.current.clientHeight
    );
    renderer.setClearColor(0x000000, 0);
    rendererRef.current = renderer;

    // Create watch model
    createWatchModel(scene);

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Start animation loop
    animate();
  };

  const createWatchModel = (scene) => {
    // Create watch group
    const watchGroup = new THREE.Group();

    // Determine material color
    const isGold = watchModel?.material?.toLowerCase().includes('gold');
    const materialColor = isGold ? 0xFFD700 : 0xC0C0C0;

    // Create watch case (hexagonal for Overseas)
    const caseGeometry = new THREE.CylinderGeometry(0.15, 0.15, 0.03, 6);
    const caseMaterial = new THREE.MeshStandardMaterial({
      color: materialColor,
      metalness: 0.9,
      roughness: 0.1
    });
    const caseMesh = new THREE.Mesh(caseGeometry, caseMaterial);
    caseMesh.rotation.x = Math.PI / 2;
    watchGroup.add(caseMesh);

    // Create watch dial
    let dialColor = 0x000080; // Default blue
    if (watchModel?.dial) {
      const dial = watchModel.dial.toLowerCase();
      if (dial.includes('green')) dialColor = 0x006400;
      else if (dial.includes('brown')) dialColor = 0x8B4513;
      else if (dial.includes('white')) dialColor = 0xF8F8FF;
      else if (dial.includes('gray')) dialColor = 0x696969;
    }

    const dialGeometry = new THREE.CircleGeometry(0.13, 32);
    const dialMaterial = new THREE.MeshStandardMaterial({
      color: dialColor,
      metalness: 0.3,
      roughness: 0.7
    });
    const dialMesh = new THREE.Mesh(dialGeometry, dialMaterial);
    dialMesh.position.z = 0.016;
    watchGroup.add(dialMesh);

    // Create hour markers
    const markerGeometry = new THREE.BoxGeometry(0.01, 0.03, 0.005);
    const markerMaterial = new THREE.MeshStandardMaterial({
      color: isGold ? 0xFFD700 : 0xFFFFFF,
      metalness: 0.8,
      roughness: 0.2
    });

    for (let i = 0; i < 12; i++) {
      const marker = new THREE.Mesh(markerGeometry, markerMaterial);
      const angle = (i * Math.PI) / 6;
      marker.position.x = Math.cos(angle) * 0.11;
      marker.position.y = Math.sin(angle) * 0.11;
      marker.position.z = 0.018;
      marker.rotation.z = angle + Math.PI / 2;
      watchGroup.add(marker);
    }

    // Create watch hands
    const now = new Date();
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Hour hand
    const hourHandGeometry = new THREE.BoxGeometry(0.008, 0.06, 0.003);
    const hourHandMaterial = new THREE.MeshStandardMaterial({
      color: isGold ? 0xFFD700 : 0xFFFFFF
    });
    const hourHand = new THREE.Mesh(hourHandGeometry, hourHandMaterial);
    const hourAngle = (hours * Math.PI) / 6 + (minutes * Math.PI) / 360;
    hourHand.position.y = 0.03;
    hourHand.position.z = 0.02;
    hourHand.rotation.z = -hourAngle;
    watchGroup.add(hourHand);

    // Minute hand
    const minuteHandGeometry = new THREE.BoxGeometry(0.006, 0.09, 0.003);
    const minuteHandMaterial = new THREE.MeshStandardMaterial({
      color: isGold ? 0xFFD700 : 0xFFFFFF
    });
    const minuteHand = new THREE.Mesh(minuteHandGeometry, minuteHandMaterial);
    const minuteAngle = (minutes * Math.PI) / 30;
    minuteHand.position.y = 0.045;
    minuteHand.position.z = 0.021;
    minuteHand.rotation.z = -minuteAngle;
    watchGroup.add(minuteHand);

    // Second hand
    const secondHandGeometry = new THREE.BoxGeometry(0.004, 0.1, 0.002);
    const secondHandMaterial = new THREE.MeshStandardMaterial({
      color: 0xFF0000
    });
    const secondHand = new THREE.Mesh(secondHandGeometry, secondHandMaterial);
    const secondAngle = (seconds * Math.PI) / 30;
    secondHand.position.y = 0.05;
    secondHand.position.z = 0.022;
    secondHand.rotation.z = -secondAngle;
    watchGroup.add(secondHand);

    // Create bracelet
    const braceletGeometry = new THREE.BoxGeometry(0.18, 0.05, 0.02);
    const braceletMaterial = new THREE.MeshStandardMaterial({
      color: isGold ? 0xDAA520 : 0xA0A0A0,
      metalness: 0.8,
      roughness: 0.3
    });
    
    const bracelet1 = new THREE.Mesh(braceletGeometry, braceletMaterial);
    bracelet1.position.x = -0.2;
    bracelet1.rotation.z = Math.PI / 12;
    watchGroup.add(bracelet1);

    const bracelet2 = new THREE.Mesh(braceletGeometry, braceletMaterial);
    bracelet2.position.x = 0.2;
    bracelet2.rotation.z = -Math.PI / 12;
    watchGroup.add(bracelet2);

    // Scale the watch
    watchGroup.scale.set(1.5, 1.5, 1.5);

    scene.add(watchGroup);
    watchMeshRef.current = watchGroup;
  };

  const animate = () => {
    if (!rendererRef.current || !sceneRef.current || !cameraThreeRef.current) {
      return;
    }

    // Update watch position based on wrist tracking
    if (watchMeshRef.current && handDetected) {
      watchMeshRef.current.position.x = wristPositionRef.current.x;
      watchMeshRef.current.position.y = wristPositionRef.current.y;
      watchMeshRef.current.position.z = wristPositionRef.current.z;
      watchMeshRef.current.visible = true;
    } else if (watchMeshRef.current) {
      watchMeshRef.current.visible = false;
    }

    // Update second hand rotation
    if (watchMeshRef.current) {
      const now = new Date();
      const seconds = now.getSeconds() + now.getMilliseconds() / 1000;
      const secondAngle = (seconds * Math.PI) / 30;
      
      // Find and update second hand (it's the 3rd hand added)
      const secondHand = watchMeshRef.current.children.find(
        child => child.material && child.material.color.getHex() === 0xFF0000
      );
      if (secondHand) {
        secondHand.rotation.z = -secondAngle;
      }
    }

    rendererRef.current.render(sceneRef.current, cameraThreeRef.current);
    animationFrameRef.current = requestAnimationFrame(animate);
  };

  if (error) {
    return (
      <div className="real-ar-viewer">
        <div className="ar-error">
          <button className="close-btn" onClick={onClose}>← Back</button>
          <div className="error-content">
            <h3>AR Initialization Failed</h3>
            <p>{error}</p>
            <button className="retry-btn" onClick={initializeAR}>
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="real-ar-viewer">
      <div className="ar-header">
        <button className="close-btn" onClick={onClose}>← Back</button>
        <h2>{watchModel?.name || 'VACHERON CONSTANTIN'}</h2>
        <div className="status">
          <span className={`status-dot ${handDetected ? 'active' : ''}`}></span>
          {handDetected ? 'Hand Detected' : 'Searching...'}
        </div>
      </div>

      {isLoading && (
        <div className="loading-overlay">
          <div className="spinner"></div>
          <p>Initializing AR Experience...</p>
          <div className="progress">
            <div className="step">{cameraReady ? '✓' : '○'} Camera</div>
            <div className="step">{handsReady ? '✓' : '○'} Hand Tracking</div>
            <div className="step">○ 3D Rendering</div>
          </div>
        </div>
      )}

      <div className="ar-container">
        <video
          ref={videoRef}
          className="video-feed"
          playsInline
          muted
          style={{ display: 'none' }}
        />
        <canvas
          ref={canvasRef}
          className="hand-canvas"
        />
        <canvas
          ref={threeCanvasRef}
          className="three-canvas"
        />
      </div>

      {!handDetected && !isLoading && (
        <div className="instructions">
          <div className="hand-icon">✋</div>
          <p>Show your wrist to the camera</p>
        </div>
      )}

      <div className="watch-info">
        <h3>{watchModel?.name}</h3>
        <p>{watchModel?.material} • {watchModel?.size}</p>
        <p className="price">{watchModel?.price}</p>
      </div>

      <style jsx>{`
        .real-ar-viewer {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: #000;
          z-index: 1000;
        }

        .ar-header {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          padding: 1rem;
          background: linear-gradient(180deg, rgba(0,0,0,0.8) 0%, transparent 100%);
          display: flex;
          align-items: center;
          justify-content: space-between;
          z-index: 10;
        }

        .close-btn {
          background: rgba(0,0,0,0.7);
          border: 1px solid #FFD700;
          color: #FFD700;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          cursor: pointer;
          font-size: 1rem;
        }

        .ar-header h2 {
          color: #FFD700;
          font-size: 1.2rem;
          margin: 0;
          letter-spacing: 2px;
        }

        .status {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: white;
          font-size: 0.9rem;
        }

        .status-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #ff4444;
        }

        .status-dot.active {
          background: #44ff44;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .loading-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 20;
        }

        .spinner {
          width: 60px;
          height: 60px;
          border: 4px solid rgba(255, 215, 0, 0.3);
          border-top: 4px solid #FFD700;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-bottom: 2rem;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .loading-overlay p {
          color: white;
          font-size: 1.2rem;
          margin-bottom: 2rem;
        }

        .progress {
          display: flex;
          gap: 2rem;
        }

        .step {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.9rem;
        }

        .ar-container {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .hand-canvas {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .three-canvas {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .instructions {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          color: white;
          z-index: 5;
        }

        .hand-icon {
          font-size: 4rem;
          margin-bottom: 1rem;
          animation: wave 2s ease-in-out infinite;
        }

        @keyframes wave {
          0%, 100% { transform: rotate(-10deg); }
          50% { transform: rotate(10deg); }
        }

        .instructions p {
          font-size: 1.2rem;
          color: #FFD700;
        }

        .watch-info {
          position: absolute;
          top: 100px;
          left: 20px;
          background: rgba(0, 0, 0, 0.8);
          padding: 1rem;
          border-radius: 8px;
          border: 1px solid rgba(255, 215, 0, 0.3);
          z-index: 10;
        }

        .watch-info h3 {
          color: #FFD700;
          margin: 0 0 0.5rem 0;
          font-size: 1rem;
        }

        .watch-info p {
          color: white;
          margin: 0.25rem 0;
          font-size: 0.9rem;
        }

        .price {
          color: #FFD700 !important;
          font-weight: 600;
        }

        .ar-error {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .error-content {
          background: rgba(20, 20, 20, 0.95);
          padding: 2rem;
          border-radius: 12px;
          text-align: center;
          max-width: 400px;
          border: 1px solid #333;
        }

        .error-content h3 {
          color: #FFD700;
          margin-bottom: 1rem;
        }

        .error-content p {
          color: #ccc;
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .retry-btn {
          background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
          color: #000;
          border: none;
          padding: 1rem 2rem;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          font-size: 1rem;
        }

        .retry-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(255, 215, 0, 0.3);
        }
      `}</style>
    </div>
  );
}

export default RealARViewer;
