var gulp            = require('gulp'),
    jade            = require('gulp-jade'),
    rename          = require('gulp-rename'),
    postcss         = require('gulp-postcss');

gulp.task('build:css', function() {
    return gulp.src('./src/less/bootstrap.less')
        .pipe(postcss([
            require('postcss-import'),
            require('postcss-nested'),
            require('autoprefixer-core')({
                browsers: [
                    'last 2 version'
                ],
                cascade: false
            })
        ]))
        .pipe(rename({
            basename: 'style',
            extname : '.css'
        }))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('build:jade', function() {
    return gulp.src('./src/jade/index.jade')
        .pipe(jade())
        .pipe(gulp.dest('./'));
});

gulp.task('default', function() {
    gulp.watch('./src/less/**/*.less', ['build:css']);
    gulp.watch('./src/jade/**/*.jade', ['build:jade']);
});