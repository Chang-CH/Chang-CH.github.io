import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import mdx from '@mdx-js/rollup';
import path from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';
import autoprefixer from 'autoprefixer';

const commons = {
  resolve: {
    alias: {
      _assets: path.resolve(__dirname, 'src/assets/'),
      _styles: path.resolve(__dirname, 'src/styles/'),
      _components: path.resolve(__dirname, 'src/components/'),
      _markdown: path.resolve(__dirname, 'src/markdown/'),
    },
    extensions: ['.ts', '.tsx', '.js'],
  },
};

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, ssrBuild }) => {
  if (command === 'serve') {
    return {
      plugins: [
        react(),
        mdx({
          jsxImportSource: 'react',
          providerImportSource: '@mdx-js/react',
        }),
        svgr(),
        tsconfigPaths(),
      ],
      css: {
        postcss: {
          plugins: [
            autoprefixer({}), // add options if needed
          ],
        },
        modules: {
          // similar to localIdentName of webpack, gives us more info to debug css
          generateScopedName: '[path][name]__[local]--[hash:base64:5]',
          localsConvention: 'camelCaseOnly',
        },
      },
      ...commons,
    };
  }

  return {
    ...commons,
    plugins: [
      react(),
      mdx({
        jsxImportSource: 'react',
      }),
      svgr(),
    ],
    build: {
      minify: 'esbuild',
      rollupOptions: {
        treeshake: 'recommended',
      },
    },
    css: {
      postcss: {
        plugins: [
          autoprefixer({}), // add options if needed
        ],
      },
      modules: {
        generateScopedName: '[hash:base64:5]',
        localsConvention: 'camelCaseOnly',
      },
    },
  };
});
