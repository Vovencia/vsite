const typescript = require('gulp-typescript'),
	// inject = require('gulp-inject'),
	gulpWebpack 	= require('webpack-stream'),
	babel 			= require('gulp-babel'),
	named 			= require('vinyl-named')
	;

const babelConfig = {
	presets: ["env"],
    // plugins: ["transform-runtime"]
}
const tsProject = typescript.createProject({
	target: "es6",
	lib: ["es5", "dom"]
})

const webpackConfig = {
	output: {
		filename: "[name].bundle.js",
	}
}

module.exports = function(core){
	var task = {
		name: 'scripts',

		source: core.getSourceAssets('scripts', '*', '*.ts'),
		dest: core.getDestAssets('scripts'),

		tsDest: core.getTemp('scripts', 'babel'),

		webpackSourcePath: core.getTemp('scripts', 'babel'),
		webpackSource: core.getTemp('scripts', 'babel', '*', 'index.js'),


		watch: [core.getSourceAssets('scripts', '**', '*.ts'), core.getSourceAssets('scripts', '**', '*.js')],

		renameFile: function(file){
			var filePath = file.history[ file.history.length - 1 ];

			var name = filePath.replace( task.webpackSourcePath, '' );
			var newPath = filePath.replace(name, '');
			name = name.replace(/\\/g, '/').split('/')[1];

			return name;
		},

		handler: function(cb){
			var task = this;
			core.gulp.src(task.prop('source'))
				.pipe( tsProject() )
				.pipe( babel(babelConfig) )

				.pipe(core.gulp.dest(task.prop('tsDest')))

				.on('end', function(){
					core.gulp.src(task.prop('webpackSource'))
						.pipe(named(task.prop('renameFile')))
						.pipe(gulpWebpack(webpackConfig))
						.pipe(core.gulp.dest(task.prop('dest')))
						.pipe(task.filesCounter() )
						.on('end', function(){
							if(typeof cb == 'function') cb();
						})
				})
		},
	}

	return task;
}