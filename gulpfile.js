var gulp = require('gulp'),
		sass = require('gulp-sass'),
		csscomb = require('gulp-csscomb'),
		autoprefixer = require('gulp-autoprefixer'),
		gcmq = require('gulp-group-css-media-queries'),
		sourcemaps = require("gulp-sourcemaps"),
		rename = require('gulp-rename'),
		gutil = require("gulp-util"),
		webpack = require("webpack"),
		connect = require('gulp-connect');

var path = {
		watch: {
				js: 'src/**/*.js',//{js,jsx}
				styles: 'src/**/*.scss'
		},
		src: {
				styles: 'src/styles/index.scss',
		},
		build: {
				styles: 'build/'
		}
};

gulp.task('styles', function() {
		return gulp.src(path.src.styles)
				.pipe(sourcemaps.init())
				.pipe(sass().on('error', sass.logError))
				.pipe(autoprefixer({
						browsers: ['last 2 versions', 'Safari >= 8'],
						cascade: false
				}))
				.pipe(gcmq())
				.pipe(csscomb())
				.pipe(sourcemaps.write('.'))
				.pipe(rename('styles.css'))
				.pipe(gulp.dest(path.build.styles))
				.pipe(connect.reload());
});

gulp.task("webpack", function(callback) {
		webpack(require('./webpack.config.js'), function(err, stats) {
				if(err) throw new gutil.PluginError("webpack", err);
				gutil.log("[webpack]", stats.toString({}));
				callback();
		});
});

gulp.task('connect', function() {
		connect.server({
				livereload: true
		});
});

gulp.task('html', function () {
		gulp.src('./index.html')
				.pipe(gulp.dest('./'))
				.pipe(connect.reload());
});

gulp.task('watch', function () {
		gulp.watch(path.watch.js, ['webpack']);
		gulp.watch(['index.html'], ['html']);
		gulp.watch(path.watch.styles, ['styles']);
});

gulp.task('default', ['styles', 'webpack', 'connect', 'watch']);
