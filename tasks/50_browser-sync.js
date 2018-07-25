const browserSync = require('browser-sync').create();

module.exports = function(core){
	var task = {
		name: 'browser-sync',

		handler: function(cb){
			if(task.isRunned) return;
			browserSync.init({
				server: core.getDest()
			});
			browserSync.watch( core.getDest("*.html") ).on("change", browserSync.reload);


			browserSync.watch( core.getDestAssets("styles", "*.css") ).on("change", () => browserSync.reload("*.css") );
			browserSync.watch( core.getDestAssets("scripts", "*.js") ).on("change", () => browserSync.reload() );

			task.isRunned = true;
		},
	}

	return task;
}