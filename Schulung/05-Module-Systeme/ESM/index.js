
import config from "./lib/config.js";
import * as helper from "./lib/helper.js";  // Alle benannten Exports "einsammeln"
import log from "./lib/logger.js";
import Math, { add, sub as minus } from "./lib/math.js";
import * as matte from "./lib/math.js";
import { add as plus, default as x} from './lib/math.js';

log('PROGRAMMSTART');
log(add(17,4));
log(minus(17,4));
log(Math.PI);
log(Math.add(21,13));

helper.toLower();

log(config.baseUrl);
