import React from 'react';
import { Button } from '@/components/ui/button.jsx';

const OVERSEAS_COLLECTION = [
  {
    id: 'overseas-chronograph-steel',
    name: 'OVERSEAS CHRONOGRAPH',
    material: 'Stainless steel with blue dial',
    reference: '5500V/110A-B481',
    price: '$37,100',
    image: '/api/placeholder/300/300',
    description: '42.5mm case, integrated bracelet, chronograph movement'
  },
  {
    id: 'overseas-selfwinding-steel',
    name: 'OVERSEAS SELF-WINDING',
    material: 'Stainless steel with blue dial',
    reference: '4500V/110A-B483',
    price: '$26,800',
    image: '/api/placeholder/300/300',
    description: '41mm case, integrated bracelet, automatic movement'
  },
  {
    id: 'overseas-dualtime-steel',
    name: 'OVERSEAS DUAL TIME',
    material: 'Stainless steel with dark gray dial',
    reference: '7900V/100A-B334',
    price: '$32,300',
    image: '/api/placeholder/300/300',
    description: '41mm case, dual time zone, integrated bracelet'
  },
  {
    id: 'overseas-chronograph-gold',
    name: 'OVERSEAS CHRONOGRAPH',
    material: '18K Pink Gold with green lacquered dial',
    reference: '5500R/000R-B074',
    price: '$84,500',
    image: '/api/placeholder/300/300',
    description: '42.5mm case, pink gold integrated bracelet'
  },
  {
    id: 'overseas-selfwinding-gold',
    name: 'OVERSEAS SELF-WINDING',
    material: '18K Pink Gold with brown dial',
    reference: '4500R/000R-B205',
    price: '$65,000',
    image: '/api/placeholder/300/300',
    description: '41mm case, pink gold integrated bracelet'
  },
  {
    id: 'overseas-quartz-steel',
    name: 'OVERSEAS QUARTZ',
    material: 'Stainless steel with white dial',
    reference: '25150/000A-9745',
    price: '$17,700',
    image: '/api/placeholder/300/300',
    description: '33mm case, quartz movement, integrated bracelet'
  }
];

function WatchSelector({ onSelectWatch, selectedWatch }) {
  return (
    <div className="watch-selector">
      <div className="selector-header">
        <h2 className="collection-title">OVERSEAS COLLECTION</h2>
        <p className="collection-subtitle">Select a timepiece to experience in AR</p>
      </div>

      <div className="watches-grid">
        {OVERSEAS_COLLECTION.map((watch) => (
          <div 
            key={watch.id}
            className={`watch-card ${selectedWatch?.id === watch.id ? 'selected' : ''}`}
            onClick={() => onSelectWatch(watch)}
          >
            <div className="watch-image-container">
              <div className="watch-placeholder">
                <div className="watch-icon">⌚</div>
              </div>
            </div>
            
            <div className="watch-info">
              <h3 className="watch-name">{watch.name}</h3>
              <p className="watch-material">{watch.material}</p>
              <p className="watch-reference">Ref. {watch.reference}</p>
              <p className="watch-description">{watch.description}</p>
              <div className="watch-price">{watch.price}</div>
            </div>

            <div className="watch-actions">
              <Button 
                className="select-button"
                variant={selectedWatch?.id === watch.id ? "default" : "outline"}
              >
                {selectedWatch?.id === watch.id ? 'Selected' : 'Select'}
              </Button>
            </div>
          </div>
        ))}
      </div>

      {selectedWatch && (
        <div className="selected-watch-info">
          <div className="selected-details">
            <h3>{selectedWatch.name}</h3>
            <p>{selectedWatch.material}</p>
            <span className="selected-price">{selectedWatch.price}</span>
          </div>
        </div>
      )}

      <style jsx>{`
        .watch-selector {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
        }

        .selector-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .collection-title {
          font-size: 2.5rem;
          font-weight: 300;
          letter-spacing: 3px;
          color: #1a1a1a;
          margin-bottom: 1rem;
        }

        .collection-subtitle {
          font-size: 1.1rem;
          color: #666;
          font-weight: 300;
          letter-spacing: 1px;
        }

        .watches-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .watch-card {
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          padding: 1.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
          background: white;
        }

        .watch-card:hover {
          border-color: #8B4513;
          box-shadow: 0 4px 12px rgba(139, 69, 19, 0.1);
          transform: translateY(-2px);
        }

        .watch-card.selected {
          border-color: #8B4513;
          box-shadow: 0 4px 12px rgba(139, 69, 19, 0.2);
          background: #fafafa;
        }

        .watch-image-container {
          margin-bottom: 1.5rem;
        }

        .watch-placeholder {
          width: 100%;
          height: 200px;
          background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #ddd;
        }

        .watch-icon {
          font-size: 4rem;
          color: #8B4513;
          opacity: 0.7;
        }

        .watch-info {
          margin-bottom: 1.5rem;
        }

        .watch-name {
          font-size: 1.3rem;
          font-weight: 500;
          letter-spacing: 1px;
          color: #1a1a1a;
          margin-bottom: 0.5rem;
        }

        .watch-material {
          font-size: 1rem;
          color: #666;
          margin-bottom: 0.25rem;
          font-weight: 300;
        }

        .watch-reference {
          font-size: 0.9rem;
          color: #888;
          margin-bottom: 0.75rem;
          font-family: monospace;
        }

        .watch-description {
          font-size: 0.95rem;
          color: #555;
          line-height: 1.4;
          margin-bottom: 1rem;
        }

        .watch-price {
          font-size: 1.4rem;
          font-weight: 600;
          color: #8B4513;
          letter-spacing: 1px;
        }

        .watch-actions {
          display: flex;
          justify-content: center;
        }

        .select-button {
          width: 100%;
          padding: 0.75rem;
          font-weight: 500;
          letter-spacing: 1px;
          transition: all 0.3s ease;
        }

        .selected-watch-info {
          background: linear-gradient(135deg, #8B4513 0%, #A0522D 100%);
          color: white;
          padding: 2rem;
          border-radius: 8px;
          text-align: center;
          margin-top: 2rem;
        }

        .selected-details h3 {
          font-size: 1.5rem;
          font-weight: 300;
          letter-spacing: 2px;
          margin-bottom: 0.5rem;
        }

        .selected-details p {
          font-size: 1.1rem;
          margin-bottom: 1rem;
          opacity: 0.9;
        }

        .selected-price {
          font-size: 1.8rem;
          font-weight: 600;
          letter-spacing: 1px;
        }

        @media (max-width: 768px) {
          .watches-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .collection-title {
            font-size: 2rem;
          }
          
          .watch-selector {
            padding: 1rem;
          }
        }
      `}</style>
    </div>
  );
}

export default WatchSelector;

