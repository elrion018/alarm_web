module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
  },
  target: ['web', 'es5'],
  mode: 'development',
};
