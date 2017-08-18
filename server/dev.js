var express = require('express');
var webpack = require('webpack');
var webpackConfig = require('./../build/webpack.config.js');
var path = require('path');

var app = express();


const compiler = webpack(webpackConfig)
app.use(require('webpack-dev-middleware')(compiler, {
	publicPath  : webpackConfig.output.publicPath,
	contentBase : path.resolve('./../', './../src'),
	hot         : true,
	quiet       : true,
	noInfo      : false,
	lazy        : false,
	stats       : 'normal',
}))
app.use(require('webpack-hot-middleware')(compiler, {
	path: '/__webpack_hmr'
}))

app.use('*', function (req, res, next) {
	const filename = path.join(__dirname, '..', 'dist', 'index.html')
	compiler.outputFileSystem.readFile(filename, (err, result) => {
		if (err) {
			return next(err)
		}
		res.set('content-type', 'text/html')
		res.send(result )
		res.end()
	})
})

app.listen(3000, function () {
	console.log('Got to http://localhost:3000');
})
