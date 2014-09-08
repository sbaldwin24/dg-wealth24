var gulp = require('gulp');
	jshint = require('gulp-jshint');
	concat = require('gulp-concat');
	uglify = require('gulp-uglify');
	rename = require('gulp-rename');
	bust = require('gulp-css-cache-bust');
	minifyCSS = require('gulp-minify-css');
	imageop = require('gulp-image-optimization');


gulp.task('images', function(cb) {
    gulp.src(['src/**/*.png','src/**/*.jpg','src/**/*.gif','src/**/*.jpeg']).pipe(imageop({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    })).pipe(gulp.dest('public/images')).on('end', cb).on('error', cb);
});	

gulp.task('minify-css', function() {
  gulp.src('./css/*.css')
    .pipe(minifyCSS({keepBreaks:true}))
    .pipe(gulp.dest('./dist/'))
});

gulp.task('lint', function() {
    return gulp.src('js/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('scripts', function() {
    return gulp.src('js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});


gulp.task('bust', function () {
  return gulp.src('index.css')
  .pipe(bust());
});

gulp.task('watch', function() {
    gulp.watch('js/*.js', ['lint', 'scripts']);
    gulp.watch('css/*.css', ['css']);
});

gulp.task('default', ['minify-css', 'lint', 'scripts', 'bust', 'watch']);