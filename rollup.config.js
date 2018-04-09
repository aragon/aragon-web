import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import url from 'rollup-plugin-url'
import progress from 'rollup-plugin-progress'
import pkg from './package.json'

export default {
  input: 'src/index.js',
  output: [
    { file: pkg.main, format: 'cjs', sourcemap: true },
    { file: pkg.module, format: 'es', sourcemap: true },
  ],
  external: ['react', 'react-dom', 'styled-components', '@aragon/ui'],
  plugins: [
    progress(),
    url({
      limit: Number.MAX_SAFE_INTEGER, // inline all SVG files
      include: ['**/*.svg'],
      emitFiles: true,
    }),
    babel({ exclude: 'node_modules/**', plugins: ['external-helpers'] }),
    resolve(),
    commonjs(),
  ],
}
