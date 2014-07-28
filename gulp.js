//move registry to a separate repo? Or at least add index.js?
var DefaultRegistry = require("orchestrator/registry/Default");

var Orchestrator = require('orchestrator');
//In what conditions it is useful to have a registry with a default repository?
var registry = new DefaultRegistry();
var orchestrator = new Orchestrator(registry);

//this is what a build file would call
//---------------------

function async(delay, message) {
  return function(done) {
    setTimeout(function () {
      done(null, message);
    }, delay);
  };
}

function private(done) {
  setTimeout(function () {
    done(null, 'private');
  }, 800);
}

orchestrator.task('foo', async(400, 'foo'));
orchestrator.task('bar', async(500, 'bar'));
orchestrator.task('baz', async(500, 'baz'));

orchestrator.task('default', orchestrator.series(orchestrator.parallel('foo', 'bar', private), 'baz'));
//---------------------


//this is what CLI would execute
orchestrator.parallel('default')(function(err, result){
  console.log(err, result);
});