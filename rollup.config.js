import includePaths from 'rollup-plugin-includepaths';
import json from '@rollup/plugin-json';
import jsonc from "rollup-plugin-jsonc";
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
      file: 'assets/script.js',
      format: 'iife'
    },
    plugins:[json(),includePaths(includePathOptions)]
};