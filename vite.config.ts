import { defineConfig } from 'vite'

import typescript from '@rollup/plugin-typescript'
import path from 'path'
import { typescriptPaths } from 'rollup-plugin-typescript-paths'
import libCss from 'vite-plugin-libcss'

export default defineConfig({
  plugins: [],
  resolve: {
    dedupe: ['react', 'react-dom'],
    alias: [
      {
        find: '~',
        replacement: path.resolve(__dirname, './src'),
      },
    ],
  },
  server: {
    port: 3000,
  },
  build: {
    manifest: true,
    cssCodeSplit: false,
    minify: true,
    reportCompressedSize: true,
    lib: {
      entry: path.resolve(__dirname, 'src/main.ts'),
      fileName: 'main',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
        },
      },
      plugins: [
        typescriptPaths({
          preserveExtensions: true,
        }),
        typescript({
          sourceMap: false,
          declaration: true,
          outDir: 'dist',
        }),
        require('tailwindcss'),
        require('autoprefixer'),
        libCss(),
      ],
    },
  },
})
