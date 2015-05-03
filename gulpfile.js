var gulp = require('gulp'),
	execSync = require('child_process').execSync,
	rename = require('gulp-rename');

var consoleDir = 'vendor/jeffstieler/rest-api-console2';

gulp

.task('default', ['console-npm-install', 'console-copy-plugin-config', 'console-build', 'console-copy-build'])

.task('console-npm-install', function() {
	execSync('npm install', { 'cwd': consoleDir });
})

.task('console-copy-plugin-config', function() {
	gulp.src('config.plugin.json')
		.pipe(rename('config.json'))
		.pipe(gulp.dest(consoleDir));
})

.task('console-build', function(cb) {
	execSync('npm run build', { 'cwd': consoleDir });
})

.task('console-copy-build', function() {
	gulp.src(consoleDir + '/build/dist/wpcom-console/public/**')
		.pipe(gulp.dest('console'));
});