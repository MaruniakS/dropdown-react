const path = require('path');

module.exports = {
	context: path.join(__dirname, 'src'),
	entry: [
		'./entry.js',
	],
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js|jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				include: path.join(__dirname, 'src'),
				query: {
					presets: [ 'es2015', 'react', 'stage-2' ]//, 'react-hmre' ]
				}
			},
		// 	{
		// 		test:/\.(s*)css$/,
		// 		loader: 'style-loader!css-loader',
		// 		include: path.join(__dirname, 'src'),
		// 	}
		]
	},
	resolve: {
		modules: [
			path.join(__dirname, 'node_modules'),
		],
			extensions: ['.js', '.jsx']
	}
};
