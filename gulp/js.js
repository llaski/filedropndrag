var gulp = require("gulp");
var sourceMaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var errorHandler = require('./errorHandler');

gulp.task('js', function() {
    return gulp.src('src/app.js')
        .pipe(sourceMaps.init())
        .on('error', errorHandler)
        .pipe(babel())
        .on('error', errorHandler)
        .pipe(sourceMaps.write(".")) //write source maps
        .pipe(gulp.dest('dist'))
});