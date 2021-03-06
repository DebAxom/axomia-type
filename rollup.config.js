import includePaths from 'rollup-plugin-includepaths';
import json from '@rollup/plugin-json';
import {terser} from 'rollup-plugin-terser';

let includePathOptions = {
  include: {},
  paths: ['src'],
  external: [],
  extensions: ['.js', '.json']
};

export default {
    input: 'src/main.js',
    output: {
      file: 'static/script.js',
      format: 'es'
    },
    plugins:[json(),terser(),includePaths(includePathOptions)]
};