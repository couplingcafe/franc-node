import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

export default {
  input: './lib/index.mjs',
  output: {
    format: 'cjs',
    file: 'dist/index.cjs',
    exports: 'default',
  },
  plugins: [nodeResolve(), terser()]
};
