module.exports = function(core){
	var task = {
		name: 'libs',
		source: core.getSourceAssets('libs', '**', '*'),
		dest: core.getDestAssets('libs'),

		watch: core.getSourceAssets('libs', '**', '*'),

		handler: function(cb){
			core.gulp.src(task.source)
				.pipe(core.gulp.dest(task.dest))
				.on('end', function(){
					if(typeof cb == 'function') cb();
				})
		},
	}

	return task;
}