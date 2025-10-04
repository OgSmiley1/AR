import React from 'react';
import { Button } from '@/components/ui/button.jsx';

function PrivacyConsent({ onAccept, onRefuse }) {
  return (
    <div className="privacy-consent-overlay">
      <div className="consent-modal">
        <div className="consent-content">
          <p className="consent-text">
            I acknowledge that any personal data, including data contained in any photographs or sizing information, which I upload into the Vacheron Constantin Virtual Try On, as well as any data relating to my usage of the Vacheron Constantin Virtual Try On, will be processed by Vacheron Constantin in accordance with the{' '}
            <a 
              href="https://www.vacheron-constantin.com/us/en/privacy-policy.html" 
              target="_blank" 
              rel="noopener noreferrer"
              className="privacy-link"
            >
              Privacy Policy
            </a>
            .
          </p>
          
          <p className="consent-note">
            This consent will apply to all VTO sessions for any products on this device.
          </p>
        </div>

        <div className="consent-actions">
          <Button 
            onClick={onRefuse}
            variant="outline"
            className="refuse-button"
          >
            Refuse
          </Button>
          <Button 
            onClick={onAccept}
            className="accept-button"
          >
            Accept
          </Button>
        </div>
      </div>

      <style jsx>{`
        .privacy-consent-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          padding: 1rem;
        }

        .consent-modal {
          background: white;
          border-radius: 8px;
          padding: 2rem;
          max-width: 500px;
          width: 100%;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .consent-content {
          margin-bottom: 2rem;
        }

        .consent-text {
          font-size: 1rem;
          line-height: 1.6;
          color: #333;
          margin-bottom: 1rem;
        }

        .consent-note {
          font-size: 0.9rem;
          color: #666;
          line-height: 1.5;
        }

        .privacy-link {
          color: #8B4513;
          text-decoration: underline;
        }

        .privacy-link:hover {
          color: #A0522D;
        }

        .consent-actions {
          display: flex;
          gap: 1rem;
          justify-content: flex-end;
        }

        .refuse-button {
          background: #333;
          color: white;
          border: 1px solid #333;
          padding: 0.75rem 2rem;
          border-radius: 4px;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .refuse-button:hover {
          background: #555;
          border-color: #555;
        }

        .accept-button {
          background: #8B4513;
          color: white;
          border: 1px solid #8B4513;
          padding: 0.75rem 2rem;
          border-radius: 4px;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .accept-button:hover {
          background: #A0522D;
          border-color: #A0522D;
        }

        @media (max-width: 600px) {
          .consent-modal {
            padding: 1.5rem;
            margin: 1rem;
          }

          .consent-actions {
            flex-direction: column;
          }

          .refuse-button,
          .accept-button {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
}

export default PrivacyConsent;

