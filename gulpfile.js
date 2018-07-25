const gulp 			= require('gulp');
const glob 			= require('glob').sync;
const path 			= require('path');
const EventEmitter 	= require('events');
const gulpSequence 	= require('gulp-sequence');
const colors 		= require('ansi-colors');
const log 			= require('fancy-log');
const named			= require('vinyl-named');
const ora 			= require('ora');

const core = {
	events: new EventEmitter(),
	gulp: gulp,
	fromRoot: function(...args){
		args.unshift(__dirname);
		return path.join.apply(path, args);
	},
	getSource: function(...args){
		args.unshift(__dirname, 'source');
		return path.join.apply(path, args);
	},
	getTemp: function(...args){
		args.unshift(__dirname, 'temp');
		return path.join.apply(path, args);
	},
	getSourceAssets: function(...args){
		args.unshift(__dirname, 'source', 'assets');
		return path.join.apply(path, args);
	},
	getDest: function(...args){
		args.unshift(__dirname, 'docs');
		return path.join.apply(path, args);
	},
	getDestAssets: function(...args){
		args.unshift(__dirname, 'docs', 'assets');
		return path.join.apply(path, args);
	},
	on: function(...args){ return core.events.on.apply(core.events, args); },
	emit: function(...args){ return core.events.emit.apply(core.events, args); },
	log: log,
	progress: function(text){
		const spinner = ora(text).start();

		return spinner;
	},
	requiredFiles: (function(){
		var files = {
			stylus: [],
			js: [],
		};

		function self(){

		}
		self.clear = function(){
			files.stylus = [];
			files.js = [];
			return self;
		}
		self.add = function(file){
			var fileExt = file.split('.').pop();
			switch(fileExt){
				case 'js':
					files.js.push(file);
				break;
				case 'styl':
					files.stylus.push(file);
				break;
			}
			return self;
		}

		return self;
	})(),
	module: function(moduleName){
		core.requiredFiles.add( core.getSource(moduleName, 'index.styl') )
		core.requiredFiles.add( core.getSource(moduleName, 'index.js') )
	}
}
core.log.color = colors;


const Task = function(task){
	this._task = task;
}
Task.prototype = {
	prop: function(propName){
		return this._task[propName];
	},
	getName: function(){
		return this._task.name;
	},
	run: function(cb){
		this.prop('handler').call(this, (typeof cb == 'function' ? cb : function(){}) );
	},
	start: function(cb){
		gulp.start( this.getName(), (typeof cb == 'function' ? cb : function(){}) );
	},
	filesCounter: function(){
		const task = this;
		this._files = [];

		return named(function(file){
			task._files.push( file.history[file.history.length - 1] );
		})
	},
	getFiles: function(){
		return this._files || [];
	}
}


var tasks = glob( path.join(__dirname, 'tasks', '*.js') ).sort();
tasks = tasks.map(function(taskPath, index){
	var progress = core.progress('Loading tasks ' + index + '/' + tasks.length);
	var task = new Task(require(taskPath)(core));
	gulp.task(task.getName(), (cb) => task.run(cb) );

	progress.succeed('Loaded task: ' + task.getName());
	return task;
});

tasks.forEach(function(task){
	if(!task.prop('watch')) return;

	core.watch(task );
})


gulp.task('default', gulpSequence.apply({}, tasks.map( task => task.getName() )));