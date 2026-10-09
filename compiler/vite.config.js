import { defineConfig } from 'vite';
export default defineConfig({
  build: {
    target: 'es2020',
    outDir: '../admin',
    emptyOutDir: false,
    lib: {
      entry: './entry.js',
      name: 'AluARTMindCompiler',
      formats: ['iife'],
      fileName: () => 'mindar-compiler.js'
    }
  }
});
