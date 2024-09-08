
const  log = require("./lib/logger");
const { add, mult } = require("./lib/math");
const Person = require("./lib/person");
const VERSION = require("./lib/version");
const inc = require("./lib/counter");

// Varianten des Imports
const math = require('./lib/math');  // Komplette Import des Objektes
const { add: plus } = require('./lib/math');  // Umbenennung der Funktion in meinem Module
const cfg = require("./lib/config");

log('Programmstart');
log(VERSION);

const p = new Person('Ryan', 'Dahl');
log(p.fullname);

log(add(17,4));
log(mult(17,4));
log(math.div(17,0));
log(plus(21,21));

log(inc());
baseUrl = '/ish';

log(cfg.baseUrl);

