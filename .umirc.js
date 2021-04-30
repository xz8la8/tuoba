import { resolve } from 'path';

export default {
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'tiantong-dashboard',
        libraryDirectory: 'src',
        style: true,
      },
      'tiantong-dashboard'
    ],
  ],
}