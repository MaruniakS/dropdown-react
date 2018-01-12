const path = require('path');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: [
        './entry.js',
    ],
    output: {
        path: path.join(__dirname, 'www'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            include: path.join(__dirname, 'src'),
            query: {
                presets: [ 'es2015', 'react', 'react-hmre' ]
            }
        }]
    },
    resolve: {
        modules: [
            path.join(__dirname, 'node_modules'),
        ]
    }
};
