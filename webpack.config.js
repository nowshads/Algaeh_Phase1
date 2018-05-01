var path = require('path');

const webpack = require('webpack');
var Extract = require('extract-text-webpack-plugin');

var plugins = [];

module.exports = {
	entry:  "./client/index.js",
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public', 'build')
	},
	watch:  true,
	module: {
		loaders: [
			{
				test: /\.scss$/,
				use: Extract.extract(
					{
						use: ['css-loader', 'sass-loader']
					}
				)
			},
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: Extract.extract('style', 'css-loader?-url&localIdentName=[name]_[local]_[hash:base64:6]&modules!sass!postcss')
            },
            {
				test: /\.js$/,
				loader: "babel-loader",
				exclude:/node_modules/,
				query:{
					presets:["react", "es2015"],
				}
			},
			{
				test: /\.(png|jp(e*)g|svg)$/,  
				use: [{
					loader: 'url-loader',
					options: { 
						limit: 8000, // Convert images < 8kb to base64 strings
						name: 'images/[hash]-[name].[ext]'
					} 
				}]
			}
		]
	},
	watchOptions: {
	    poll: true
	},
	plugins: plugins.concat([
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js', Infinity }),
        new webpack.DefinePlugin({
            __DEV__: 'development',
            __PROD__: 'production'
        }),
        new Extract({
			filename: 'css/bundle.css',
			disable: false,
			allChunks: true
		})
    ])

};


