const imagemin = require('gulp-imagemin');
const cache = require('gulp-cached');

module.exports = function(core){
	var task = {
		name: 'images',
		source: core.getSourceAssets('images', '**', '*'),
		dest: core.getDestAssets('images'),

		watch: core.getSourceAssets('images', '**', '*'),

		handler: function(cb){
			core.gulp.src(task.source)
				.pipe(cache('images'))
				.pipe(imagemin())
				.pipe(core.gulp.dest(task.dest))
				.on('end', function(){
					if(typeof cb == 'function') cb();
				})
		},
	}

	return task;
}