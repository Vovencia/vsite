import {root, source, docs} from "./_utils";
import {snapSvgPath} from "./_config";

import module from "./module";
import plugins from "./plugins";
import optimization from "./optimization";

const config = {
	mode: 'development',
	entry: {
		'app/main': source("index.tsx"),
		'apps/index': source("apps/index.tsx"),
	},
	output: {
		filename: "[name].js",
		path: docs(),
		publicPath: "/",

		chunkFilename: '[name].js',
	},

	context: source(),

	devtool: "source-map",

	resolve: {
		extensions: [".ts", ".tsx", ".js", ".json", "png", "jpg", "gif", "svg"],
		alias: {
			'@system': source('system'),
			'@utils': source('utils'),
			'@components': source('components'),
			'@apps': source('apps'),
			'@assets': source('assets'),
			'@interfaces': source('interfaces'),
			'@mixins': source('mixins'),
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

	module: module,
	plugins: plugins,
	optimization: optimization,
}

export default config;