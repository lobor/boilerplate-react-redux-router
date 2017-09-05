var path = require('path')
var webpack = require('webpack');
var MyPlugin = require('./plugins/gzip')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const InlineChunkManifestHtmlWebpackPlugin = require('inline-chunk-manifest-html-webpack-plugin');

const DashboardPlugin = require('webpack-dashboard/plugin');
var CompressionPlugin = require("compression-webpack-plugin")

const __DEV__ = process.env.NODE_ENV === 'development'
var config = {
	entry: {
		main: [
			"./src/main.js"
		]
	},
	devtool: __DEV__ ? 'source-map' : false,
	output: {
    filename: "[name].js",
    path: path.join(__dirname, '..', "dist"),
		publicPath: 'http://localhost:8080/'
  },
	module: {
	  rules: [
			{
			  test: /\.html$/,
			  loader: "html-loader",
			},
	    {
	      test: /\.js$/,
	      exclude: /.*node_modules((?!router-by-redux).)*$/,
				use: [
					{ loader: 'react-hot-loader' },
					{
						loader: 'babel-loader',
						query: {
							presets: ['es2015', 'react', 'stage-2', 'stage-0']
						}
					}
				]
	    }
	  ],
	},
	resolve: {
		alias: {
			'components': path.join(__dirname, '..', 'src', 'components'),
		}
	},
	plugins: [
		// new InlineChunkManifestHtmlWebpackPlugin(),
		new HtmlWebpackPlugin({
		  template: path.join(__dirname, '..', 'src', "index.html"),
		  inject: true,
			hash: true,
		  minify: {
		    collapseWhitespace: true,
		  },
		})
	]
};

if (__DEV__) {
	config.plugins.push(
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
		// new DashboardPlugin()
	);
} else {
	Object.assign(config.resolve.alisa, {react: "preact-compat", "react-dom": "preact-compat"});

	config.plugins.push(
		new MyPlugin({ options: '' }),
		new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
		new webpack.optimize.UglifyJsPlugin(),
		new webpack.DefinePlugin({
		  'process.env': {
		    NODE_ENV: JSON.stringify('production')
		  }
		}),
    new webpack.optimize.AggressiveMergingPlugin()//Merge chunks
	);
}

module.exports = config;
