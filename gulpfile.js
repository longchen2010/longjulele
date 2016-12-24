/**
 * Created by Administrator on 2016/12/8 0008.
 */
//首先引入 gulp 模块
var gulp = require('gulp');
//引入 gulp-stylus 插件
var stylus = require('gulp-stylus');
//引入压缩 css 的文件
var minifycss = require('gulp-minify-css');
//引入压缩 js 的文件
var uglify = require('gulp-uglify');
//引入启动 node 的文件
var nodemon = require('gulp-nodemon');
//引入静态服务代理
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

//创建一个启动 node 的任务
gulp.task('nodemon', function(ab){
	var ft = false;
	return nodemon({
		script: './server.js'
	} ).on('start', function(){
		if(!ft){
			ab();
			ft = true;
		}
	})
});
//创建一个静态服务代理的任务
gulp.task('browserSync',['nodemon'], function(){
	browserSync.init({
		proxy: {
			target: 'http://127.0.0.1:16912'
		},
		files: ['*'],
		port: 9888,
		open:false,
		notiy: false
	})
});


//创建一个编译 stylus 的任务
gulp.task('stylus', function(){
	//获取要编译的文件
	//指定一个文件
	//gulp.src('./stylus/index.styl');
	//指定多个文件
	//gulp.src(['./stylus/index.styl','./stylus/css.styl']);
	//指定一个目录下所有(不包含子目录)
	//gulp.src('./stylus/*.styl')
	//指定一个目录及所有子目录下的文件
	return gulp.src('./stylus/**/*.styl')
		//执行 stylus 编译
		.pipe(stylus())
		//输出编译后的文件
		.pipe(gulp.dest('./public/css'))

});
//创建一个压缩 css 的任务
gulp.task('minifycss',['stylus'], function(){
	return gulp.src('./public/css/**/*.css')
		.pipe(minifycss())
		.pipe(gulp.dest('./public/mincss'))
});
//创建一个压缩 js 的任务
gulp.task('uglify', function(){
	return gulp.src('./public/js/**/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('./public/minjs'))
});

gulp.task('watcher',['browserSync','stylus', 'uglify'], function(){
	gulp.watch('./stylus/**/*.styl',['stylus']);
	gulp.watch('./public/js/**/*.js',['uglify']);

	gulp.watch(['./public/css/**/*.css','./public/minjs/**/*.js']).on('change',function(){
		reload();
	})
});


//gulp.task('es6', function(){
//	console.log('this is es6');
//});
//
//gulp.task('css', function(){
//	console.log('this is css');
//});
//
////先执行 es6，执行完成再执行 minijs
//gulp.task('minijs', ['es6'], function(){
//	console.log('this is minijs');
//});
////创建一个执行其他任务的任务
//gulp.task('all',['es6', 'css', 'minijs'], function(){
//	console.log('this is all');
//});

//创建一个 default 任务
gulp.task('default', function(){
	console.log('this default')
});