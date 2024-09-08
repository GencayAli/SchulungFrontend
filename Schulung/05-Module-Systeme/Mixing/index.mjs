import { fn1 } from "./lib/mod1.js";
import { fn3 } from "./lib/mod2.cjs";
import fn7, { fn5 } from "./lib/mod3.mjs";

import mod2 from "./lib/mod2.cjs";

fn1();
fn3();
fn5();
fn7();

mod2.fn4();
