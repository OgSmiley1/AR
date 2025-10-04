import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button.jsx';

const ALLOWED_PERMISSIONS = Object.freeze([
  'camera *',
  'microphone *',
  'xr-spatial-tracking *',
]);

/**
 * Generates the semicolon-delimited permission string required for AR iframe.
 */
export function generateIframeAllowList() {
  return ALLOWED_PERMISSIONS.join('; ');
}

/**
 * AR Viewer component for Vacheron Constantin watch try-on
 * Based on Cartier's implementation approach
 */
function ARViewer({ watchModel, onClose }) {
  const [cameraPermission, setCameraPermission] = useState('prompt');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    initializeCamera();
  }, []);

  const initializeCamera = async () => {
    try {
      setIsLoading(true);
      setError(null);

      // Request camera permission with rear camera preference
      const constraints = {
        video: {
          facingMode: { ideal: 'environment' }, // Prefer rear camera
          width: { ideal: 1280 },
          height: { ideal: 720 }
        }
      };

      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setCameraPermission('granted');
        setIsLoading(false);
      }
    } catch (err) {
      console.error('Camera access error:', err);
      setError('Unable to access camera. Please refresh page to allow camera permission or check browser camera setting and make sure camera is not being blocked.');
      setCameraPermission('denied');
      setIsLoading(false);
    }
  };

  const handleRetryCamera = () => {
    initializeCamera();
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
            <p className="error-message">{error}</p>
            <Button 
              onClick={handleRetryCamera}
              className="retry-button"
            >
              Got it
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="ar-viewer">
      <div className="ar-header">
        <button 
          className="close-button"
          onClick={onClose}
          aria-label="Close AR viewer"
        >
          ×
        </button>
        <h2 className="watch-title">{watchModel?.name || 'VACHERON CONSTANTIN WATCH'}</h2>
      </div>

      <div className="ar-content">
        {isLoading ? (
          <div className="loading-overlay">
            <div className="loading-spinner"></div>
            <p>Initializing AR experience...</p>
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
            
            <div className="ar-instructions">
              <div className="hand-outline">
                <svg viewBox="0 0 200 200" className="hand-guide">
                  <path
                    d="M50 150 Q60 140 70 130 Q80 120 90 110 Q100 100 110 110 Q120 120 130 130 Q140 140 150 150"
                    stroke="white"
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray="5,5"
                  />
                </svg>
              </div>
              <p className="instruction-text">Position your wrist to start</p>
            </div>

            <div className="ar-controls">
              <button className="capture-button">
                <div className="capture-inner"></div>
              </button>
            </div>

            <div className="ar-options">
              <div className="option-group">
                <div className="option-icon">📏</div>
                <span>WRIST SIZE</span>
              </div>
              <div className="option-group">
                <div className="option-icon">⌚</div>
                <span>STRAPS</span>
              </div>
            </div>
          </>
        )}
      </div>

      <style jsx>{`
        .ar-viewer {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: #000;
          z-index: 1000;
          display: flex;
          flex-direction: column;
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
          background: rgba(0, 0, 0, 0.9);
          padding: 2rem;
          border-radius: 8px;
          text-align: center;
          max-width: 400px;
          margin: 0 1rem;
        }

        .error-content {
          color: white;
          position: relative;
        }

        .error-message {
          margin: 1rem 0 2rem 0;
          line-height: 1.5;
        }

        .close-button {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: none;
          border: none;
          color: white;
          font-size: 2rem;
          cursor: pointer;
          z-index: 1001;
        }

        .ar-header {
          position: relative;
          padding: 1rem;
          text-align: center;
          background: rgba(0, 0, 0, 0.5);
        }

        .watch-title {
          color: white;
          font-size: 1.2rem;
          font-weight: 300;
          letter-spacing: 2px;
          margin: 0;
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
          background: #000;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .loading-spinner {
          width: 40px;
          height: 40px;
          border: 3px solid rgba(255, 255, 255, 0.3);
          border-top: 3px solid white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-bottom: 1rem;
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
          width: 200px;
          height: 200px;
          margin: 0 auto 1rem auto;
          border: 2px dashed rgba(255, 255, 255, 0.7);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hand-guide {
          width: 100px;
          height: 100px;
        }

        .instruction-text {
          font-size: 1.1rem;
          font-weight: 300;
          letter-spacing: 1px;
          margin: 0;
        }

        .ar-controls {
          position: absolute;
          bottom: 120px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
        }

        .capture-button {
          width: 80px;
          height: 80px;
          border: 4px solid white;
          border-radius: 50%;
          background: transparent;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .capture-inner {
          width: 60px;
          height: 60px;
          background: white;
          border-radius: 50%;
        }

        .ar-options {
          position: absolute;
          bottom: 40px;
          left: 0;
          right: 0;
          display: flex;
          justify-content: space-around;
          padding: 0 2rem;
          z-index: 10;
        }

        .option-group {
          display: flex;
          flex-direction: column;
          align-items: center;
          color: white;
          font-size: 0.9rem;
          font-weight: 300;
          letter-spacing: 1px;
        }

        .option-icon {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .retry-button {
          background: #8B4513;
          color: white;
          border: none;
          padding: 0.75rem 2rem;
          border-radius: 4px;
          cursor: pointer;
          font-weight: 500;
        }

        .retry-button:hover {
          background: #A0522D;
        }
      `}</style>
    </div>
  );
}

export default ARViewer;

