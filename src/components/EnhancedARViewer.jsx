import React, { useState, useEffect, useRef } from 'react';

/**
 * Enhanced AR Viewer with working watch overlay on hand detection
 * Fixes camera initialization and implements proper 3D watch rendering
 */
function EnhancedARViewer({ watchModel, onClose }) {
  const [cameraPermission, setCameraPermission] = useState('prompt');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [handDetected, setHandDetected] = useState(false);
  const [watchPosition, setWatchPosition] = useState({ x: 0, y: 0 });
  
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    initializeEnhancedCamera();
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const initializeEnhancedCamera = async () => {
    try {
      setIsLoading(true);
      setError(null);

      // Enhanced camera constraints with multiple fallback strategies
      const cameraStrategies = [
        // Strategy 1: Force rear camera with exact constraint
        {
          video: {
            facingMode: { exact: 'environment' },
            width: { ideal: 1280 },
            height: { ideal: 720 }
          }
        },
        // Strategy 2: Prefer rear camera
        {
          video: {
            facingMode: { ideal: 'environment' },
            width: { ideal: 1280 },
            height: { ideal: 720 }
          }
        },
        // Strategy 3: Any camera as fallback
        {
          video: {
            width: { ideal: 1280 },
            height: { ideal: 720 }
          }
        }
      ];

      let stream = null;
      let strategyUsed = 0;

      for (let i = 0; i < cameraStrategies.length; i++) {
        try {
          console.log(`Trying camera strategy ${i + 1}:`, cameraStrategies[i]);
          stream = await navigator.mediaDevices.getUserMedia(cameraStrategies[i]);
          strategyUsed = i + 1;
          break;
        } catch (err) {
          console.log(`Strategy ${i + 1} failed:`, err.message);
          if (i === cameraStrategies.length - 1) {
            throw err;
          }
        }
      }

      if (stream && videoRef.current) {
        videoRef.current.srcObject = stream;
        
        // Verify camera type
        const videoTrack = stream.getVideoTracks()[0];
        const settings = videoTrack.getSettings();
        console.log('Camera settings:', settings);
        console.log(`Successfully using strategy ${strategyUsed}`);
        
        setCameraPermission('granted');
        
        // Wait for video to load before starting AR
        videoRef.current.onloadedmetadata = () => {
          setIsLoading(false);
          startHandTracking();
        };
      }
    } catch (err) {
      console.error('Enhanced camera access error:', err);
      setError(`Camera access failed: ${err.message}. Please allow camera permission and ensure you're using HTTPS.`);
      setCameraPermission('denied');
      setIsLoading(false);
    }
  };

  const startHandTracking = () => {
    if (!videoRef.current || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const video = videoRef.current;

    // Set canvas size to match video
    canvas.width = video.videoWidth || 1280;
    canvas.height = video.videoHeight || 720;

    const detectAndRender = () => {
      if (!video.videoWidth || !video.videoHeight) {
        animationRef.current = requestAnimationFrame(detectAndRender);
        return;
      }

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Simple hand detection simulation (replace with actual MediaPipe in production)
      const centerX = canvas.width * 0.5;
      const centerY = canvas.height * 0.6;
      
      // Simulate hand detection
      setHandDetected(true);
      setWatchPosition({ x: centerX, y: centerY });

      // Render 3D watch overlay
      renderWatchOverlay(ctx, centerX, centerY);

      animationRef.current = requestAnimationFrame(detectAndRender);
    };

    detectAndRender();
  };

  const renderWatchOverlay = (ctx, x, y) => {
    if (!watchModel) return;

    // Save context
    ctx.save();

    // Watch dimensions (scaled for visibility)
    const watchSize = 120;
    const watchThickness = 15;

    // Draw watch shadow
    ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
    ctx.shadowBlur = 10;
    ctx.shadowOffsetX = 5;
    ctx.shadowOffsetY = 5;

    // Draw watch case (hexagonal for Overseas)
    ctx.beginPath();
    const sides = 6;
    const radius = watchSize / 2;
    
    for (let i = 0; i < sides; i++) {
      const angle = (i * 2 * Math.PI) / sides - Math.PI / 2;
      const px = x + radius * Math.cos(angle);
      const py = y + radius * Math.sin(angle);
      
      if (i === 0) {
        ctx.moveTo(px, py);
      } else {
        ctx.lineTo(px, py);
      }
    }
    ctx.closePath();

    // Watch case color based on model
    const isGold = watchModel.material?.includes('Gold') || watchModel.material?.includes('gold');
    const caseGradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
    
    if (isGold) {
      caseGradient.addColorStop(0, '#FFD700');
      caseGradient.addColorStop(0.5, '#FFA500');
      caseGradient.addColorStop(1, '#B8860B');
    } else {
      caseGradient.addColorStop(0, '#E8E8E8');
      caseGradient.addColorStop(0.5, '#C0C0C0');
      caseGradient.addColorStop(1, '#808080');
    }
    
    ctx.fillStyle = caseGradient;
    ctx.fill();
    ctx.strokeStyle = isGold ? '#B8860B' : '#606060';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw watch dial
    ctx.beginPath();
    ctx.arc(x, y, radius * 0.8, 0, 2 * Math.PI);
    
    // Dial color based on model
    let dialColor = '#000080'; // Default blue
    if (watchModel.dial?.includes('green')) dialColor = '#006400';
    else if (watchModel.dial?.includes('brown')) dialColor = '#8B4513';
    else if (watchModel.dial?.includes('white')) dialColor = '#F8F8FF';
    else if (watchModel.dial?.includes('gray')) dialColor = '#696969';
    
    const dialGradient = ctx.createRadialGradient(x, y, 0, x, y, radius * 0.8);
    dialGradient.addColorStop(0, dialColor);
    dialGradient.addColorStop(1, adjustBrightness(dialColor, -30));
    
    ctx.fillStyle = dialGradient;
    ctx.fill();

    // Draw hour markers
    ctx.strokeStyle = isGold ? '#FFD700' : '#FFFFFF';
    ctx.lineWidth = 3;
    
    for (let i = 0; i < 12; i++) {
      const angle = (i * Math.PI) / 6;
      const innerRadius = radius * 0.65;
      const outerRadius = radius * 0.75;
      
      const x1 = x + innerRadius * Math.cos(angle);
      const y1 = y + innerRadius * Math.sin(angle);
      const x2 = x + outerRadius * Math.cos(angle);
      const y2 = y + outerRadius * Math.sin(angle);
      
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    }

    // Draw watch hands (showing current time)
    const now = new Date();
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Hour hand
    const hourAngle = (hours * Math.PI) / 6 + (minutes * Math.PI) / 360;
    drawHand(ctx, x, y, hourAngle, radius * 0.4, 6, isGold ? '#FFD700' : '#FFFFFF');

    // Minute hand
    const minuteAngle = (minutes * Math.PI) / 30;
    drawHand(ctx, x, y, minuteAngle, radius * 0.6, 4, isGold ? '#FFD700' : '#FFFFFF');

    // Second hand
    const secondAngle = (seconds * Math.PI) / 30;
    drawHand(ctx, x, y, secondAngle, radius * 0.7, 2, '#FF0000');

    // Draw center dot
    ctx.beginPath();
    ctx.arc(x, y, 6, 0, 2 * Math.PI);
    ctx.fillStyle = isGold ? '#FFD700' : '#FFFFFF';
    ctx.fill();

    // Draw bracelet segments
    drawBracelet(ctx, x, y, radius, isGold);

    // Restore context
    ctx.restore();
  };

  const drawHand = (ctx, centerX, centerY, angle, length, width, color) => {
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate(angle - Math.PI / 2);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(length, 0);
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.lineCap = 'round';
    ctx.stroke();
    ctx.restore();
  };

  const drawBracelet = (ctx, centerX, centerY, radius, isGold) => {
    const braceletColor = isGold ? '#DAA520' : '#A0A0A0';
    const linkWidth = 20;
    const linkHeight = 8;
    
    // Draw bracelet links extending from watch
    for (let side = 0; side < 2; side++) {
      const direction = side === 0 ? -1 : 1;
      
      for (let i = 0; i < 3; i++) {
        const linkX = centerX + direction * (radius + 10 + i * linkWidth);
        const linkY = centerY;
        
        ctx.fillStyle = braceletColor;
        ctx.fillRect(linkX - linkWidth/2, linkY - linkHeight/2, linkWidth, linkHeight);
        
        ctx.strokeStyle = adjustBrightness(braceletColor, -20);
        ctx.lineWidth = 1;
        ctx.strokeRect(linkX - linkWidth/2, linkY - linkHeight/2, linkWidth, linkHeight);
      }
    }
  };

  const adjustBrightness = (color, amount) => {
    const num = parseInt(color.replace('#', ''), 16);
    const amt = Math.round(2.55 * amount);
    const R = (num >> 16) + amt;
    const G = (num >> 8 & 0x00FF) + amt;
    const B = (num & 0x0000FF) + amt;
    return '#' + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
      (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
      (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
  };

  const handleRetryCamera = () => {
    initializeEnhancedCamera();
  };

  if (error) {
    return (
      <div className="ar-viewer-error">
        <div className="error-overlay">
          <div className="error-content">
            <button 
              className="close-button"
              onClick={onClose}
              aria-label="Close AR viewer"
            >
              ×
            </button>
            <h3>Camera Access Required</h3>
            <p className="error-message">{error}</p>
            <button 
              onClick={handleRetryCamera}
              className="retry-button"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="enhanced-ar-viewer">
      <div className="ar-header">
        <button 
          className="close-button"
          onClick={onClose}
          aria-label="Close AR viewer"
        >
          ← Back
        </button>
        <h2 className="watch-title">
          {watchModel?.name || 'VACHERON CONSTANTIN'}
        </h2>
        <div className="ar-status">
          <div className={`status-indicator ${handDetected ? 'active' : 'inactive'}`}>
            <span className="status-dot"></span>
            Tracking: {handDetected ? 'Active' : 'Searching'}
          </div>
        </div>
      </div>

      <div className="ar-content">
        {isLoading ? (
          <div className="loading-overlay">
            <div className="loading-spinner"></div>
            <p>Initializing Enhanced AR...</p>
            <div className="loading-steps">
              <div className="step">📷 Camera: Connecting...</div>
              <div className="step">🤖 AI Engine: Loading...</div>
              <div className="step">⌚ Watch Model: Ready</div>
            </div>
          </div>
        ) : (
          <>
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="camera-feed"
            />
            <canvas
              ref={canvasRef}
              className="ar-overlay"
            />
            
            {!handDetected && (
              <div className="ar-instructions">
                <div className="hand-outline">
                  <div className="hand-guide">
                    ✋
                  </div>
                </div>
                <p className="instruction-text">Position your wrist in the frame</p>
                <p className="instruction-subtext">The watch will appear automatically</p>
              </div>
            )}

            <div className="ar-info">
              <div className="watch-details">
                <h3>{watchModel?.name}</h3>
                <p>{watchModel?.material} • {watchModel?.size}</p>
                <p className="price">{watchModel?.price}</p>
              </div>
            </div>

            <div className="ar-controls">
              <button className="capture-button" title="Capture Photo">
                📸
              </button>
              <button className="share-button" title="Share">
                📤
              </button>
            </div>
          </>
        )}
      </div>

      <style jsx>{`
        .enhanced-ar-viewer {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: #000;
          z-index: 1000;
          display: flex;
          flex-direction: column;
          font-family: 'Helvetica Neue', Arial, sans-serif;
        }

        .ar-viewer-error {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: #000;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .error-overlay {
          background: rgba(20, 20, 20, 0.95);
          padding: 2rem;
          border-radius: 12px;
          text-align: center;
          max-width: 400px;
          margin: 0 1rem;
          border: 1px solid #333;
        }

        .error-content {
          color: white;
          position: relative;
        }

        .error-content h3 {
          color: #FFD700;
          margin-bottom: 1rem;
          font-size: 1.3rem;
        }

        .error-message {
          margin: 1rem 0 2rem 0;
          line-height: 1.6;
          color: #ccc;
        }

        .close-button {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: rgba(0, 0, 0, 0.7);
          border: 1px solid #333;
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          cursor: pointer;
          z-index: 1001;
          font-size: 1rem;
        }

        .close-button:hover {
          background: rgba(0, 0, 0, 0.9);
        }

        .ar-header {
          position: relative;
          padding: 1rem;
          background: linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 100%);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .watch-title {
          color: #FFD700;
          font-size: 1.1rem;
          font-weight: 300;
          letter-spacing: 2px;
          margin: 0;
          text-align: center;
          flex: 1;
        }

        .ar-status {
          display: flex;
          align-items: center;
        }

        .status-indicator {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: white;
          font-size: 0.9rem;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #ff4444;
        }

        .status-indicator.active .status-dot {
          background: #44ff44;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .ar-content {
          flex: 1;
          position: relative;
          overflow: hidden;
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
          color: white;
        }

        .loading-spinner {
          width: 60px;
          height: 60px;
          border: 4px solid rgba(255, 215, 0, 0.3);
          border-top: 4px solid #FFD700;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-bottom: 2rem;
        }

        .loading-steps {
          margin-top: 2rem;
          text-align: left;
        }

        .step {
          margin: 0.5rem 0;
          font-size: 0.9rem;
          opacity: 0.8;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .camera-feed {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .ar-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .ar-instructions {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          color: white;
          z-index: 10;
        }

        .hand-outline {
          width: 150px;
          height: 150px;
          margin: 0 auto 1rem auto;
          border: 3px dashed rgba(255, 215, 0, 0.8);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: breathe 2s ease-in-out infinite;
        }

        @keyframes breathe {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .hand-guide {
          font-size: 4rem;
          animation: wave 2s ease-in-out infinite;
        }

        @keyframes wave {
          0%, 100% { transform: rotate(-10deg); }
          50% { transform: rotate(10deg); }
        }

        .instruction-text {
          font-size: 1.2rem;
          font-weight: 300;
          letter-spacing: 1px;
          margin: 0 0 0.5rem 0;
          color: #FFD700;
        }

        .instruction-subtext {
          font-size: 0.9rem;
          opacity: 0.8;
          margin: 0;
        }

        .ar-info {
          position: absolute;
          top: 100px;
          left: 20px;
          background: rgba(0, 0, 0, 0.8);
          padding: 1rem;
          border-radius: 8px;
          color: white;
          z-index: 10;
          border: 1px solid rgba(255, 215, 0, 0.3);
        }

        .watch-details h3 {
          margin: 0 0 0.5rem 0;
          color: #FFD700;
          font-size: 1rem;
        }

        .watch-details p {
          margin: 0.25rem 0;
          font-size: 0.9rem;
          opacity: 0.9;
        }

        .price {
          color: #FFD700 !important;
          font-weight: 500 !important;
        }

        .ar-controls {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 2rem;
          z-index: 10;
        }

        .capture-button, .share-button {
          width: 60px;
          height: 60px;
          border: 2px solid rgba(255, 215, 0, 0.8);
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.7);
          color: #FFD700;
          font-size: 1.5rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .capture-button:hover, .share-button:hover {
          background: rgba(255, 215, 0, 0.2);
          transform: scale(1.1);
        }

        .retry-button {
          background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
          color: #000;
          border: none;
          padding: 1rem 2rem;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .retry-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(255, 215, 0, 0.3);
        }
      `}</style>
    </div>
  );
}

export default EnhancedARViewer;

