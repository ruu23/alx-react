const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.js'],
    },
    module: {
        rules: [
          {
            test: /\.js$/, // Match all .js files
            exclude: /node_modules/, // Exclude the node_modules directory
            use: {
              loader: 'babel-loader', // Use Babel loader
            }
        }
    ]
    },
};