const gulp = require('gulp');
const sass = require('gulp-sass');

function compileSass() {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('src/css'));
}

function watchSass() {
    gulp.watch('src/scss/**/*.scss', compileSass);
}

exports.compileSass = compileSass;
exports.watchSass = watchSass;