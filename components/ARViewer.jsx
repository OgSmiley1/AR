import React from 'react';

const ALLOWED_PERMISSIONS = Object.freeze([
  'camera *',
  'microphone *',
  'xr-spatial-tracking *',
]);

/**
 * Generates the semicolon-delimited permission string required for the Emersya iframe.
 *
 * @returns {string} A stable iframe permission declaration in the order expected by tests and browsers.
 */
export function generateIframeAllowList() {
  return ALLOWED_PERMISSIONS.join('; ');
}

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
        allow={generateIframeAllowList()}
        allowFullScreen
        style={{ border: 'none', width: '100%', height: '100%' }}
      />
    </div>
  );
}

export default ARViewer;
