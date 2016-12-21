//首先引入gulp模块
var gulp=require('gulp');
var stylus=require('gulp-stylus');
var minifycss=require('gulp-minify-css');
var uglify=require('gulp-uglify');
var browserSync=require('browser-sync' ).create()
var reload=browserSync.reload
var nodemon=require('gulp-nodemon')
gulp.task('nodemon',function(ab){
	var ft=false;
	return nodemon({
	script:'./app.js'})
.on('start',function(){
	if(!ft){
		ab();
		ft=true;
	}
} )
});
gulp.task('browserSync',['nodemon'],function(){
	browserSync.init({
		proxy:{
			target:'http://127.0.0.1:16912'
		},
		port:9888,
		open:false,
		files:['*']
	})
})
gulp.task('stylus',function(){
	return gulp.src('./stylus/**/*.styl')
		.pipe(stylus())
		.pipe(gulp.dest('./public/css'))
});

gulp.task('minifycss',['stylus'],function(){
	return gulp.src('./public/css/**/*.css')
		.pipe(minifycss())
		.pipe(gulp.dest('./public/minicss'))
});
gulp.task('watcher',['stylus','uglify' ,'browserSync'],function(){
	gulp.watch('./public/js/**/*.js',['uglify']);
	gulp.watch('./stylus/**/*.styl',['stylus']);
	gulp.watch( ['./public/css/**/*.css','./public/minijs/**/*.js'] ).on('change',function(){
		reload();
	});

})
//
gulp.task('uglify',function(){
	return gulp.src('./public/js/**/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('./public/minijs'))
})
gulp.task('default',function(){
	console.log('this default')
});