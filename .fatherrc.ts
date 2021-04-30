export default {
  cjs: { type: 'babel' },
  esm: {
    type: 'babel',
    importLibToEs: true,
  },
  runtimeHelpers: true,
  pkgs: ['shared', 'operator']
    .map((name) => `tiangong-${name}`)
    .concat(['dashboard'].map((name) => `tiantong-${name}`)),
  preCommit: {
    eslint: true,
    prettier: true,
  },
  // extraBabelPlugins: [
  //   ['babel-plugin-import', { libraryName: 'antd', libraryDirectory: 'es', style: true }, 'antd'],
  // ],
};
