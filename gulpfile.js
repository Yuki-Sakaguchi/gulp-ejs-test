var gulp    = require('gulp'),
    plumber = require('gulp-plumber'),
    ejs     = require('gulp-ejs'),
    rename  = require('gulp-rename');

gulp.task('ejs', function() {
    // コンパイル元
    gulp.src([
        './src/ejs/**/*.ejs',
        '!./src/ejs/**/_*.ejs'
    ])

    // エラーでコンパイルを止めない
    .pipe(plumber())

    // ejsコンパイル
    .pipe(ejs())

    // 拡張子をhtmlに変更
    .pipe(rename({extname: '.html'}))

    // コンパイル先
    .pipe(gulp.dest("./public/"));
});

gulp.task('watch', function() {
    gulp.watch('./src/ejs/**/*.ejs', ['ejs']);
});