const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const nano = require('cssnano');
const prefixer = require('autoprefixer');

//include
const imagemin = require('gulp-imagemin');

// defines some common tasks for Gulp to run

// like compile and minify SASS files
function compile(done) {
    gulp.src('./sass/**/*.scss')
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(postcss([prefixer(), nano()]))
        .pipe(gulp.dest('./css'))
        done()
}

function squashImage(done) {
gulp.src('./images/**')
    .pipe(imagemin())
    .pipe(gulp.dest('./dest/images'))
    done()
}

exports.compile = compile;
exports.squash = squashImages;