var gulp = require('./gulp');

function async(delay, message) {
  return function(done) {
    setTimeout(function () {
      console.log("Some async function finished saying: ", message);
      done(null, message);
    }, delay);
  };
}

function private(done) {
  return gulp.src('.gitignore').pipe(gulp.dest('dest'));
}

gulp.task('foo', async(400, 'foo'));
gulp.task('bar', async(500, 'bar'));
gulp.task('baz', async(500, 'baz'));

gulp.task(function named() {
  console.log("Look, I'm a named function that acts as a task :-)");
  return 'from named';
});

gulp.task('default', gulp.series(gulp.parallel('foo', 'bar', private), 'baz', 'named'));