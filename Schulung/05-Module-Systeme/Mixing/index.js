const { fn1 } = require("./lib/mod1");
const { fn3 } = require("./lib/mod2.cjs");

import("./lib/mod3.mjs").then(mod => {
    fn1();
    mod.fn5();
    fn3();
});

