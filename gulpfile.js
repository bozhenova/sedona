let gulp = require('gulp'),
  browserSync = require('browser-sync'),
  autoprefixer = require('gulp-autoprefixer');

gulp.task('css', function() {
  return gulp
    .src('./*.css')
    .pipe(autoprefixer(['last 4 versions'], { cascade: true }))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task('html', function() {
  return gulp.src('./*.html').pipe(browserSync.reload({ stream: true }));
});

gulp.task('js', function() {
  return gulp.src('./*.js').pipe(browserSync.reload({ stream: true }));
});

gulp.task('browser-sync', function() {
  browserSync.init({
    server: { baseDir: './' }
  });
});

gulp.task('watch', function() {
  gulp.watch('./*.css', gulp.parallel('css'));
  gulp.watch('./*.html', gulp.parallel('html'));
  gulp.watch('./*.js', gulp.parallel('js'));
});

gulp.task('default', gulp.parallel('browser-sync', 'watch'));
