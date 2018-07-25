const watch = require('gulp-watch');;

module.exports = function(core){
	core.watch = function(task){
		core.watch._tasks.push(task)
	};
	core.watch._tasks = [];

	return {
		name: 'watch',
		handler: function(cb){
			core.watch._tasks.forEach(function(task){
				watch(task.prop('watch'), function(){
					core.log("Changed: '" + core.log.color.cyan(task.getName()) + "'");
					task.start();
				});
			})
			cb()
		}
	}
}