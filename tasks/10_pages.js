const concat 	= require('gulp-concat');
const pug 		= require('gulp-pug');
const pugIncludeGlob = require('pug-include-glob');


module.exports = function(core){
	var task = {
		name: 'pages',
		source: core.getSource('pages', '*.pug'),
		dest: core.getDest(),

		watch: [core.getSource('layout', '*.pug'), core.getSource('pages', '*.pug')],

		handler: function(cb){
			core.gulp.src(task.source)
				.pipe(pug({
					locals: {
						core: core,
					},
					plugins: [ pugIncludeGlob({ /* options */ }) ]
				}))
				.pipe(core.gulp.dest(task.dest))
				.on('end', function(){
					if(typeof cb == 'function') cb();
				})
		},
	}

	return task;
}