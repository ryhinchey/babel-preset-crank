module.exports = function() {
  return {
    plugins: [
      ['@babel/plugin-transform-react-jsx', { pragma: 'createElement'}]
    ]
  };
};