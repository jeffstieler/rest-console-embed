var gulp = require('gulp'),
	exec = require('child_process').exec,
	rename = require('gulp-rename');

var consoleDir = 'vendor/jeffstieler/rest-api-console2';

gulp

.task('default', ['console-npm-install', 'console-copy-plugin-config', 'console-build', 'console-copy-build'])

.task('console-npm-install', function(cb) {
	exec('npm install', { 'cwd': consoleDir }, function(err) {
		if (err) {
			return cb(err);
		}
		cb();
	});
})

.task('console-copy-plugin-config', function() {
	return gulp.src('config.plugin.json')
		.pipe(rename('config.json'))
		.pipe(gulp.dest(consoleDir));
})

.task('console-build', ['console-copy-plugin-config', 'console-npm-install'], function(cb) {
	exec('npm run build', { 'cwd': consoleDir }, function(err) {
		if (err) {
			return cb(err);
		}
		cb();
	});
})

.task('console-copy-build', ['console-build'], function() {
	gulp.src(consoleDir + '/build/dist/wpcom-console/public/**')
		.pipe(gulp.dest('console'));
});