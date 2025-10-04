import { useState } from 'react';
import { Button } from '@/components/ui/button.jsx';
import WatchSelector from './components/WatchSelector.jsx';
import EnhancedARViewer from './components/EnhancedARViewer.jsx';
import PrivacyConsent from './components/PrivacyConsent.jsx';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('home'); // home, selector, privacy, ar
  const [selectedWatch, setSelectedWatch] = useState(null);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  const handleBeginExperience = () => {
    setCurrentView('selector');
  };

  const handleSelectWatch = (watch) => {
    setSelectedWatch(watch);
  };

  const handleStartAR = () => {
    if (!privacyAccepted) {
      setCurrentView('privacy');
    } else {
      setCurrentView('ar');
    }
  };

  const handlePrivacyAccept = () => {
    setPrivacyAccepted(true);
    setCurrentView('ar');
  };

  const handlePrivacyRefuse = () => {
    setCurrentView('selector');
  };

  const handleCloseAR = () => {
    setCurrentView('selector');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedWatch(null);
  };

  if (currentView === 'ar') {
    return <EnhancedARViewer watchModel={selectedWatch} onClose={handleCloseAR} />;
  }

  if (currentView === 'privacy') {
    return (
      <PrivacyConsent 
        onAccept={handlePrivacyAccept}
        onRefuse={handlePrivacyRefuse}
      />
    );
  }

  return (
    <div className="app">
      {/* Header */}
      <header className="app-header">
        <div className="header-content">
          <div className="logo-section">
            <h1 className="brand-name">VACHERON CONSTANTIN</h1>
            <p className="brand-tagline">Swiss Haute Horlogerie since 1755</p>
          </div>
          
          {currentView === 'selector' && (
            <Button 
              onClick={handleBackToHome}
              variant="outline"
              className="back-button"
            >
              ← Back to Home
            </Button>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {currentView === 'home' && (
          <div className="home-view">
            <div className="hero-section">
              <div className="hero-content">
                <h2 className="hero-title">
                  Experience Overseas Collection
                  <br />
                  <span className="hero-subtitle">in Augmented Reality</span>
                </h2>
                
                <p className="hero-description">
                  Discover the iconic Overseas collection through our immersive AR experience. 
                  Try on authentic Vacheron Constantin timepieces virtually and explore 
                  the perfect harmony of tradition and innovation.
                </p>

                <div className="hero-features">
                  <div className="feature">
                    <div className="feature-icon">📱</div>
                    <span>Real-time AR Experience</span>
                  </div>
                  <div className="feature">
                    <div className="feature-icon">⌚</div>
                    <span>6 Overseas Models</span>
                  </div>
                  <div className="feature">
                    <div className="feature-icon">🎯</div>
                    <span>Precise Wrist Tracking</span>
                  </div>
                </div>

                <Button 
                  onClick={handleBeginExperience}
                  size="lg"
                  className="cta-button"
                >
                  Begin AR Experience
                </Button>
              </div>

              <div className="hero-visual">
                <div className="watch-showcase">
                  <div className="showcase-watch">⌚</div>
                  <div className="showcase-glow"></div>
                </div>
              </div>
            </div>

            <div className="info-section">
              <div className="info-grid">
                <div className="info-card">
                  <h3>Overseas Collection</h3>
                  <p>Inspired by the Maltese cross, the Overseas collection embodies the spirit of travel and adventure with its distinctive integrated bracelet and hexagonal bezel.</p>
                </div>
                <div className="info-card">
                  <h3>AR Technology</h3>
                  <p>Our advanced augmented reality technology provides an authentic try-on experience, allowing you to see how each timepiece looks and feels on your wrist.</p>
                </div>
                <div className="info-card">
                  <h3>Swiss Craftsmanship</h3>
                  <p>Each Overseas timepiece represents over 265 years of Swiss watchmaking excellence, combining traditional craftsmanship with contemporary design.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentView === 'selector' && (
          <div className="selector-view">
            <WatchSelector 
              onSelectWatch={handleSelectWatch}
              selectedWatch={selectedWatch}
            />
            
            {selectedWatch && (
              <div className="ar-launch-section">
                <div className="launch-content">
                  <h3>Ready to try on {selectedWatch.name}?</h3>
                  <p>Experience this timepiece in augmented reality</p>
                  <Button 
                    onClick={handleStartAR}
                    size="lg"
                    className="ar-launch-button"
                  >
                    Start AR Try-On
                  </Button>
                </div>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <div className="footer-content">
          <p>&copy; 2024 Vacheron Constantin. All rights reserved.</p>
          <p>Experience Swiss Haute Horlogerie in AR</p>
        </div>
      </footer>

      <style jsx>{`
        .app {
          min-height: 100vh;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          display: flex;
          flex-direction: column;
        }

        .app-header {
          background: white;
          border-bottom: 1px solid #e0e0e0;
          padding: 1rem 0;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .header-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .brand-name {
          font-size: 1.8rem;
          font-weight: 300;
          letter-spacing: 3px;
          color: #1a1a1a;
          margin: 0;
        }

        .brand-tagline {
          font-size: 0.9rem;
          color: #666;
          margin: 0;
          font-style: italic;
        }

        .back-button {
          border-color: #8B4513;
          color: #8B4513;
        }

        .back-button:hover {
          background: #8B4513;
          color: white;
        }

        .main-content {
          flex: 1;
          padding: 2rem 0;
        }

        .home-view {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .hero-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          margin-bottom: 4rem;
          min-height: 60vh;
        }

        .hero-content {
          max-width: 500px;
        }

        .hero-title {
          font-size: 3rem;
          font-weight: 300;
          line-height: 1.2;
          color: #1a1a1a;
          margin-bottom: 1.5rem;
          letter-spacing: 1px;
        }

        .hero-subtitle {
          color: #8B4513;
          font-weight: 400;
        }

        .hero-description {
          font-size: 1.2rem;
          line-height: 1.6;
          color: #555;
          margin-bottom: 2rem;
        }

        .hero-features {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 3rem;
        }

        .feature {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-size: 1.1rem;
          color: #333;
        }

        .feature-icon {
          font-size: 1.5rem;
          width: 40px;
          text-align: center;
        }

        .cta-button {
          background: linear-gradient(135deg, #8B4513 0%, #A0522D 100%);
          color: white;
          padding: 1rem 2.5rem;
          font-size: 1.1rem;
          font-weight: 500;
          letter-spacing: 1px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(139, 69, 19, 0.3);
        }

        .hero-visual {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .watch-showcase {
          position: relative;
          width: 300px;
          height: 300px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .showcase-watch {
          font-size: 8rem;
          color: #8B4513;
          z-index: 2;
          position: relative;
        }

        .showcase-glow {
          position: absolute;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(139, 69, 19, 0.2) 0%, transparent 70%);
          border-radius: 50%;
          animation: pulse 3s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.1); opacity: 0.4; }
        }

        .info-section {
          background: white;
          border-radius: 12px;
          padding: 3rem;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        .info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .info-card {
          text-align: center;
        }

        .info-card h3 {
          font-size: 1.4rem;
          font-weight: 500;
          color: #1a1a1a;
          margin-bottom: 1rem;
          letter-spacing: 1px;
        }

        .info-card p {
          font-size: 1rem;
          line-height: 1.6;
          color: #666;
        }

        .selector-view {
          background: white;
          border-radius: 12px;
          margin: 0 2rem;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          overflow: hidden;
        }

        .ar-launch-section {
          background: linear-gradient(135deg, #8B4513 0%, #A0522D 100%);
          color: white;
          padding: 3rem;
          text-align: center;
        }

        .launch-content h3 {
          font-size: 1.8rem;
          font-weight: 300;
          margin-bottom: 1rem;
          letter-spacing: 1px;
        }

        .launch-content p {
          font-size: 1.1rem;
          margin-bottom: 2rem;
          opacity: 0.9;
        }

        .ar-launch-button {
          background: white;
          color: #8B4513;
          padding: 1rem 2.5rem;
          font-size: 1.1rem;
          font-weight: 600;
          letter-spacing: 1px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .ar-launch-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.2);
        }

        .app-footer {
          background: #1a1a1a;
          color: white;
          padding: 2rem 0;
          text-align: center;
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .footer-content p {
          margin: 0.5rem 0;
          opacity: 0.8;
        }

        @media (max-width: 768px) {
          .hero-section {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }

          .hero-title {
            font-size: 2.2rem;
          }

          .header-content {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }

          .info-grid {
            grid-template-columns: 1fr;
          }

          .home-view,
          .selector-view {
            margin: 0 1rem;
          }
        }
      `}</style>
    </div>
  );
}

export default App;

