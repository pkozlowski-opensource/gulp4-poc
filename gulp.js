'use strict';

var util = require('util');
var DefaultRegistry = require("orchestrator/registry/Default");
var Orchestrator = require('orchestrator');
var vfs = require('vinyl-fs');

//we should expose registry to the CLI but not to the gulpfile
var registry = new DefaultRegistry();

function Gulp() {
  Orchestrator.call(this, registry);
}
util.inherits(Gulp, Orchestrator);

Gulp.prototype.src = vfs.src;
Gulp.prototype.dest = vfs.dest;
Gulp.prototype.watch = function (glob, opt, fn) {
  if (typeof opt === 'function' || Array.isArray(opt)) {
    fn = opt;
    opt = null;
  }

  // array of tasks given
  if (Array.isArray(fn)) {
    return vfs.watch(glob, opt, function () {
      this.start.apply(this, fn);
    }.bind(this));
  }

  return vfs.watch(glob, opt, fn);
};

module.exports = new Gulp();
