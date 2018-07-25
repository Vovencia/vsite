module.exports = function(core){
	var task = {
		name: 'clean',
		dest: core.getDest(),

		handler: function(cb){
			cb();
		},
	}

	return task;
}