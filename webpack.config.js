const path = require('path');
const webpack = require('webpack');
const PORT = 8081;

module.exports = {
	mode: "development",
	devtool: "source-map",

	entry: {
		bundle: [
			'./src/index.tsx',
			'./src/scss/main.scss'
		],
	},

	output: {
		filename: "bundle.js"
	},

	resolve: {
		extensions: [ '.ts', '.tsx', '.js', '.json', '.jsx'],
        modules: ['src', 'node_modules']
	},

	module: {
		rules: [
			{ test: /\.tsx?$/, loader: "awesome-typescript-loader" },
			{ enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
			{
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader"],
            }
		]
	},

	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: PORT
	}
};
