const ENV = process.env.NODE_ENV || 'development';

const clearDocs = (ENV == 'production');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader')
const path = require('path');
const webpack = require('webpack');
const glob = require('glob').sync;
const pugIncludeGlob = require('pug-include-glob');
const fs = require('fs');

function _path(...args) { args.unshift(__dirname); return path.normalize( path.join(...args) ); }

let snapSvgPath = _path('node_modules/snapsvg/');
if( fs.existsSync( path.join(snapSvgPath, 'dist', 'snap.svg-min.js') ) ){
	snapSvgPath = path.join(snapSvgPath, 'dist', 'snap.svg-min.js');
} else {
	snapSvgPath = path.join(snapSvgPath, 'dist', 'snap.svg.js');
}

var config = {
	mode: 'development',
	entry: function(){
		let appNamePattern = _path("source/apps/").replace(/\\/g, '\/') + '(.+?)/.+';
		appNamePattern = new RegExp(appNamePattern);

		let apps = glob( _path("source", "apps", "*", "index.+(t|j)s?(x)") );

		apps = apps.map((item) => {
			item = item.replace(/\\/g, '\/');
			let parsed = appNamePattern.exec(item);
			return {
				name: parsed[1],
				path: item,
				dir: item.replace(/index.+(t|j)s?(x)$/, ''),
			}
		});

		apps = apps.reduce(function(result, item){
			result[ 'apps/' + item.name + '/index' ] = item.path;
			// result[ 'apps/' + item.name + '/content' ] = path.normalize( path.join(item.dir, 'content') );
			return result;
		}, {});

		var result = {
			'app/main': _path("source/index.tsx"),
			'apps/index': _path("source/apps/index.tsx"),
			// ...apps,
		}
		return result;
	},
	output: {
		filename: "[name].js",
		path: _path("docs"),
		publicPath: '/',

		chunkFilename: '[name].js',
	},

	context: _path('source') + "/",

	devtool: "source-map",

	resolve: {
		extensions: [".ts", ".tsx", ".js", ".json", "png", "jpg", "gif", "svg"],
		alias: {
			'@system': _path('source/system'),
			'@utils': _path('source/utils'),
			'@components': _path('source/components'),
			'@apps': _path('source/apps'),
			'@assets': _path('source/assets'),
			'@interfaces': _path('source/interfaces'),
			'@mixins': _path('source/mixins'),
			'snapsvg': snapSvgPath,
		}
	},

	node: {
		dgram: 'empty',
		fs: 'empty',
		net: 'empty',
		tls: 'empty',
		child_process: 'empty',
		__dirname : true,
	},

	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /(node_modules|bower_components)/,
				use: [
					{
						loader: "awesome-typescript-loader",
						options: {
							configFileName: _path('./tsconfig.json'),
							// useBabel: true,
							// babelOptions: {
							// 	plugins: ["dynamic-import-webpack"]
							// },
							// babelCore: "@babel/core"
						}
					}
				],
			},
			{
				test: /\.styl$/,
				use: [
				  'style-loader',
				  'css-loader',
				  {
					loader: 'stylus-loader',
					options: {
						import: _path('source', 'mixins', 'stylus.styl')
					},
				  },
				],
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader',
					},
					{
						loader: 'css-loader',
					},
				],
			},
			{
				test: /\.pug$/,
				use : [{
					loader: 'pug-loader',
					options: {
						plugins: [ pugIncludeGlob({ /* options */ }) ]
					}
				}]
			},
			{
				test: /((\/assets\/|\\assets\\)|(\.(png|jpg|gif|svg)$))/,
				use: [
					{
						loader: 'file-loader',
						options: {
							useRelativePath: true,
							outputPath: function(path){
								path = path.replace('/source/', '');
								return path;
							},
							name: '[path][name].[ext]?[hash]',
						}
					}
				]
			},
			{
				test: snapSvgPath,
				use: 'imports-loader?this=>window,fix=>module.exports=0',
			},
		]
	},

	plugins: [
		new CheckerPlugin(),
		(clearDocs && new CleanWebpackPlugin([_path('docs', '!(CNAME)')])),
		// Generates an `index.html` file with the <script> injected.
		new HtmlWebpackPlugin({
			inject: false,
			template: _path( 'source', 'layout', 'default.pug'),
			excludeChunks: [ 'apps' ],
		}),
		// This is necessary to emit hot updates (currently CSS only):
		// new webpack.HotModuleReplacementPlugin(),
		// Watcher doesn't work well if you mistype casing in a path so we use
		// a plugin that prints an error when you attempt to do this.
		// See https://github.com/facebookincubator/create-react-app/issues/240
		new CaseSensitivePathsPlugin(),
		// Moment.js is an extremely popular library that bundles large locale files
		// by default due to how Webpack interprets its code. This is a practical
		// solution that requires the user to opt into importing specific locales.
		// https://github.com/jmblog/how-to-optimize-momentjs-with-webpack
		// You can remove this if you don't use Moment.js:
		new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
	].filter(Boolean),

	// When importing a module whose path matches one of the following, just
	// assume a corresponding global variable exists and use that instead.
	// This is important because it allows us to avoid bundling all of our
	// dependencies, which allows browsers to cache those libraries between builds.
	// externals: {
	// 	"react": "React",
	// 	"react-dom": "ReactDOM"
	// },

	optimization: {
		runtimeChunk: 'single',
		// mergeDuplicateChunks: true,
		// removeEmptyChunks: false,
		// flagIncludedChunks: true,
		// occurrenceOrder: true,
		// concatenateModules: false,
		splitChunks: {
			minSize: 1,
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: 'app/vendors',
					chunks: 'all'
				},
				components: {
					test: /[\\/]source[\\/]components[\\/]/,
					name: 'app/components',
					chunks: 'all'
				},
				utils: {
					test: /[\\/]source[\\/]utils[\\/]/,
					name: 'app/utils',
					chunks: 'all'
				},
				system: {
					test: /[\\/]source[\\/]system[\\/]/,
					name: 'app/system',
					chunks: 'all'
				},
				mixins: {
					test: /[\\/]source[\\/]mixins[\\/]/,
					name: 'app/mixins',
					chunks: 'all'
				},
				interfaces: {
					test: /[\\/]source[\\/]interfaces[\\/]/,
					name: 'app/interfaces',
					chunks: 'all'
				},
			}
		}
	}
}
module.exports = config;