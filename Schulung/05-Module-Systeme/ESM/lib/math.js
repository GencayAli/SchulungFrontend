import log from "./logger.js";

export function add(a,b) {
    return a+b;
}

export function sub(a,b) {
    return a-b;
}

export function mult(a,b) {
    return a*b;
}

export function div(a,b) {
    if (b === 0) log('Division by Zero');
    return a/b;
}

export const PI = 3.14;

// Ungewöhnliches Muster, dass nochmal alle benannten Exports im Default-Export zusammenfasst
export default { add, sub, mult, div, PI };
