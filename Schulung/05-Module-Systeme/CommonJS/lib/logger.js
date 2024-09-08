
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

module.exports = log;
