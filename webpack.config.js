const ENV = process.env.NODE_ENV || 'development';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader')
const path = require('path');
const webpack = require('webpack');

function _path(...args) { args.unshift(__dirname); return path.normalize( path.join(...args) ); }

module.exports = {
	mode: 'development',
	entry: _path("source/index.tsx"),
	output: {
		filename: "app/[name].js",
		path: _path("docs/"),
		// publicPath: '/',
	},

	devtool: "inline-source-map",

	resolve: {
		extensions: [".ts", ".tsx", ".js", ".json"]
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
							configFileName: _path('./tsconfig.json')
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
					loader: 'pug-loader'
				}]
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							outputPath: function(path){
								return path.replace('source/', '');
							},
							name: '[path][name].[ext]?[hash]',
						}
					}
				]
			},
		]
	},

	plugins: [
		new CheckerPlugin(),
		new CleanWebpackPlugin([_path('docs')]),
		// Generates an `index.html` file with the <script> injected.
		new HtmlWebpackPlugin({
			inject: 'body',
			template: _path( 'source', 'layout', 'default.pug'),
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
	],

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
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all'
				}
			}
		}
	}
}