const serve = require('webpack-serve');
const config = require('./webpack.config.js');

const static = require('koa-static')

const historyApiFallback = require('koa-history-api-fallback');

serve({
	logTime: true,
	logLevel: 'trace',
	config,
	add: (app, middleware, options) => {
		app.use(static(__dirname + '/source/assets/'));
		app.use(historyApiFallback());
	},
}).then(function(server){
	server.on('compiler-error', function(Stats){
		console.error('compiler-error', Stats)
	})
	server.on('compiler-warning', function(Stats){
		console.warn('compiler-warning', Stats)
	})
});