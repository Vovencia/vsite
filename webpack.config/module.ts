import {root, source} from "./_utils";
import {snapSvgPath} from "./_config";
const pugIncludeGlob = require('pug-include-glob');

export default {
	rules: [
		{
			test: /\.tsx?$/,
			exclude: /(node_modules|bower_components)/,
			use: [
				{
					loader: "awesome-typescript-loader",
					options: {
						configFileName: root('tsconfig.json'),
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
					import: source('mixins', 'stylus.styl')
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
}