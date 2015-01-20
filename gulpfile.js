var gulp 		= require('gulp');
var pumbler 	= require('gulp-plumber');
var browserSync = require('browser-sync');
var reload 		= browserSync.reload;
var less 		= require('gulp-less');
var runSequence = require('run-sequence');
var imagemin    = require('gulp-imagemin');


gulp.task('browser-sync',function () {
	browserSync({
		notify:true,
		port: 3000,
		proxy: "localhost:4000"
	});	
});


gulp.task('less',function(){
	gulp.src('src/less/main.less')
	.pipe(less({compress: true}))
	.pipe(gulp.dest('./assets/css'))
	.pipe(reload({stream:true}))

});


gulp.task('imagemin', function(){
	return gulp.src('src/img/**/*')
	.pipe(pumbler())
	.pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true}))
	.pipe(gulp.dest('assets/img'))
});

gulp.task('serve', function (){
	runSequence('less','browser-sync');	
	gulp.watch(['_layouts/*.html','_includes/*.html','./*.html'], reload);	
	gulp.watch(['./src/less/*.less'], ['less', reload]);
	gulp.watch('src/img/**/*.{jpg,png,gif}',['imagemin', reload]);
});