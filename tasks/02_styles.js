const concat = require('gulp-concat');
const stylus = require('gulp-stylus');


module.exports = function(core){
	var task = {
		name: 'styles',
		source: core.getSourceAssets('styles', '*.styl'),
		dest: core.getDestAssets('styles'),

		watch: core.getSourceAssets('styles', '*.styl'),

		handler: function(cb){
			core.gulp.src(task.source)
				.pipe(stylus({
					compress: true
				}))
				.pipe(core.gulp.dest(task.dest))
				.on('end', function(){
					if(typeof cb == 'function') cb();
				})
		},
	}

	return task;
}