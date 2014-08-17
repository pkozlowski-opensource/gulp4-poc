var gulp = require('./gulp');

function async(delay, message) {
  return function(done) {
    console.log("Some async function started and going to say: ", message);
    setTimeout(function () {
      console.log("Some async function finished after saying: ", delay, message);
      done(null, message);
    }, delay);
  };
}

function private(done) {
  return gulp.src('.gitignore').pipe(gulp.dest('dest'));
}

gulp.task('foo', async(1000, 'foo'));
gulp.task('bar', async(1000, 'bar'));
gulp.task('baz', async(2000, 'baz'));

gulp.task(function named() {
  console.log("Look, I'm a named function that acts as a task :-)");
  return 'from named';
});

gulp.task('default', gulp.series(gulp.parallel('foo', 'bar'), 'baz'));