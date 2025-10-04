import React from 'react';
import { render, screen } from '@testing-library/react';
import ARViewer, { generateIframeAllowList } from '../ARViewer';

/**
 * Utility factory for generating a mock Emersya session URL for testing.
 *
 * @returns {string} A deterministic mock session URL.
 */
function createMockSessionUrl() {
  return 'https://emersya.com/session/mock-session';
}

describe('ARViewer', () => {
  describe('generateIframeAllowList', () => {
    it('produces a stable semicolon-delimited permission string', () => {
      expect(generateIframeAllowList()).toBe(
        'camera *; microphone *; xr-spatial-tracking *'
      );
    });
  });

  it('renders an iframe that opts into WebXR, camera, and microphone permissions', () => {
    render(<ARViewer sessionUrl={createMockSessionUrl()} />);

    const iframe = screen.getByTitle('Emersya AR Viewer');
    expect(iframe).toBeInTheDocument();
    expect(iframe).toHaveAttribute(
      'allow',
      expect.stringContaining('xr-spatial-tracking *')
    );
    expect(iframe).toHaveAttribute(
      'allow',
      expect.stringContaining('camera *')
    );
    expect(iframe).toHaveAttribute(
      'allow',
      expect.stringContaining('microphone *')
    );
  });
});
