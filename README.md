# AR Viewer Components

This repository contains the Emersya-powered augmented reality (AR) viewer component together with a Jest regression suite that verifies the iframe permissions required for WebXR experiences.

## Prerequisites

- Node.js 18+
- npm 9+

## Install Dependencies

```bash
npm install
```

## Run the Automated Tests

```bash
npm test
```

The test suite renders the `ARViewer` component and validates that the iframe exposes camera, microphone, and WebXR permissions.

## Launching a Local Playground

This repository ships the standalone `Wrist Try-On.html` page and associated assets that you can open directly in a WebXR-capable browser (Chrome, Edge, or Firefox Reality) on a compatible device:

1. Run a static file server from the project root so the browser can access local assets:
   ```bash
   npx serve .
   ```
2. Browse to `http://localhost:3000/Wrist%20Try-On.html` (adjust the port if `serve` chooses a different one).
3. Follow the on-screen prompts to grant camera permissions and launch the Emersya session.

> **Tip:** When testing on a mobile device or headset, ensure the device and your development machine are on the same network so that the hosted page is reachable.

## Manual WebXR Verification

To confirm the iframe permissions fix on real hardware:

1. Complete the "Launching a Local Playground" steps above on a WebXR-capable device.
2. When the Emersya session prompts for permissions, accept camera, microphone, and motion tracking access.
3. The session should now launch without the previous security warning related to missing `xr-spatial-tracking` permissions.

## Troubleshooting

- If you encounter a blank view, double-check that your browser supports WebXR and that motion tracking is enabled.
- When self-hosting, some browsers require HTTPS to access AR functionality. You can use a tunneling service such as `ngrok` if your device enforces secure contexts.
