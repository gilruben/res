module.exports = {
  entry: "./app/public/app.jsx",
  output: {
    path: "./app/public",
    filename: "bundle.js",
  },
  //what is bundle.js doing?
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        //what problem is this solving?
        //what is regex?
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
          //transpiling & compilation
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ["", ".js", ".jsx" ]
  }
};
