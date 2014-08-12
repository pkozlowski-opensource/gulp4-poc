//move registry to a separate repo? Or at least add index.js?
var DefaultRegistry = require("orchestrator/registry/Default");

var Orchestrator = require('orchestrator');
//In what conditions it is useful to have a registry with a default repository?
var registry = new DefaultRegistry();
var orchestrator = new Orchestrator(registry);

module.exports = orchestrator;
