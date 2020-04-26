module.exports = function() {
  return {
    plugins: [
      ['babel-plugin-jsx-pragmatic', {
				module: '@bikeshaving/crank',
				export: 'createElement',
				import: 'createElement'
			}],
      ['@babel/plugin-transform-react-jsx', { pragma: 'createElement'}]
    ]
  };
};