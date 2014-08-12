var gulp = require('./gulp');
//require gulpfile to register tasks
require('./gulpfile');

var tasks = process.argv.splice(2);


//execute, yay!
gulp.parallel.apply(gulp, tasks.length ? tasks : ['default'])(function(err, result) {
  if (err) {
    throw err;
  } else {
    console.log('Gulp finished with: ', result);
  }
});

//TODO: somehow I should access to the repository here, but should not expose it to a gulpfile :-/