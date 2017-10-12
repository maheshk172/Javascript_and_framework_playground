'use strict';

var gulp = require('gulp');
var git = require('gulp-git');
var bump = require('gulp-bump');
var fs = require('fs');
var runSequence = require('run-sequence');

var release_branch = 'develop';

var release = function(version, done) {
    runSequence(
        'pull-changes',
        'test-release',
        'bump-' + version,
        'commit-changes',
        'create-tag',
        'push-changes',
        'push-tags',
        'publish',
        done
    );
};

// ----RELEASE TASKS
gulp.task('release-patch', function(done) {
    release('patch', done);
});

gulp.task('release-minor', function(done) {
    release('minor', done);
});

gulp.task('release-major', function(done) {
    release('major', done);
});


// ----HELPER TASKS
var getPackageJson = function () {
    return JSON.parse(fs.readFileSync('./package.json', 'utf8'));
};

gulp.task('pull-changes', function(cb) {
    git.pull('origin', release_branch, cb);
});

gulp.task('commit-changes', function () {
    var pkg = getPackageJson();
    var message = 'Release v' + pkg.version;
    return gulp.src('.')
        .pipe(git.add())
        .pipe(git.commit(message));
});

gulp.task('create-tag', function(cb) {
    var pkg = getPackageJson();
    git.tag(pkg.version, 'Release v' + pkg.version, cb);
});

gulp.task('push-changes', function(cb) {
    git.push('origin', release_branch, cb);
});

gulp.task('push-tags', function (cb) {
    git.push('origin', release_branch, {args: '--tags'}, cb);
});

gulp.task('publish', function (cb) {
    require('child_process').exec('npm publish', cb);
});

var doBump = function(type) {
    return gulp.src(['package.json'])
        .pipe(bump({type: type}))
        .pipe(gulp.dest('./'));
};

// ----BUMPS
gulp.task('bump-patch',function () {
    return doBump('patch');
});

gulp.task('bump-minor',function () {
    return doBump('minor');
});

gulp.task('bump-major',function () {
    return doBump('major');
});
