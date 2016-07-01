/**
 * FileName gulpfile
 * Date 2016-07-01
 * Created by jianglinj
 */
var gulp = require("gulp");
var babel = require("gulp-babel");

gulp.task('watch', function () {
    gulp.watch('asign/**/*.js', ['babel']);
});

gulp.task("babel", function () {
    return gulp.src("asign/**/*.js")
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest("dist"));
});

gulp.task("default", ['babel', 'watch']);