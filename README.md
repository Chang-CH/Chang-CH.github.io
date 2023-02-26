# Chang-Ch portfolio site

## Setup guide

### Installation

1. Make sure you have [nodeJs](https://nodejs.org/en/) installed. This project was built on version `v16.13.1`.
2. Install [pnpm](https://pnpm.io/installation).
   - For windows, powershell: `iwr https://get.pnpm.io/install.ps1 -useb | iex`
   - For POSIX systems: `wget -qO- https://get.pnpm.io/install.sh | sh -` or `curl -fsSL https://get.pnpm.io/install.sh | sh -`
3. Install dependencies: run `pnpm install`.

### Start development server

1. run `pnpm dev`

### Build production build

1. run `pnpm build`
2. build output is `/dist`
3. To serve the output locally, make sure you have `serve` installed: `npm install -g serve`
4. enter the `dist` directory: `cd dist`
5. run serve: `serve -s`

### Testing

1. run `pnpm test`
