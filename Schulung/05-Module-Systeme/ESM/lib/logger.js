import cfg from "./config.js";

cfg.baseUrl = '/api/v2';

console.log('Logger-Module');

/**
 * Kleiner Log Helper
 * 
 * @param {String} msg 
 */
function log(msg) {
    console.log(formatTS() + msg);
}

function formatTS() {
    return `[${new Date().toLocaleTimeString()}] `
}

// Das ist der Default-Export
// 1. Kann nur einmal pro Module erfolgen
// 2. Ist nur "eine Sache" - wie in CommonJS
// 3. Import über "import MyName from './lib/logger.js'"
export default log;  // Oder "export default" vor die Deklaration der Funktion 

