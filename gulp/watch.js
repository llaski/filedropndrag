var gulp = require('gulp');

gulp.task('watch', function() {
  gulp.watch('src/**/*.js', ['js', 'lint']);
});