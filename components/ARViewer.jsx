import React from 'react';

/**
 * Renders an Emersya-powered augmented reality viewer for a specific watch.
 *
 * @param {{ sessionUrl: string }} props - The props object that configures the AR session iframe.
 * @param {string} props.sessionUrl - The Emersya session URL to be embedded.
 * @returns {JSX.Element} The iframe container with the AR session.
 */
function ARViewer({ sessionUrl }) {
  if (!sessionUrl) {
    throw new Error('ARViewer requires a valid sessionUrl to render the experience.');
  }

  return (
    <div className="ar-viewer">
      <iframe
        src={sessionUrl}
        title="Emersya AR Viewer"
        allow="camera *; microphone *; xr-spatial-tracking *"
        allowFullScreen
        style={{ border: 'none', width: '100%', height: '100%' }}
      />
    </div>
  );
}

export default ARViewer;
