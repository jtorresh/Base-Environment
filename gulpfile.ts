import gulp from 'gulp';
import ts from 'gulp-typescript';
import del from 'del';

gulp.task('cleandist', () => {
    return del('dist/*')
});
gulp.task('compile', () => {
    const tsProject = ts.createProject('./tsconfig.json');
    return gulp.src(['./src/**/*.ts']).pipe(tsProject()).pipe(gulp.dest('./dist'));
});
gulp.task("default", gulp.series(['cleandist', 'compile']));