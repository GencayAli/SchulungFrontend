const fs = require('fs');

function wait(ms) {
    const start =Date.now();
    let jetzt;
    do {
         jetzt = Date.now();
    } while ( jetzt - start < ms);
}

function createRandomNumber(max) {
    const seed = Date.now();
    let step2;

    for(let ix = 0; ix < 5_000_000_000; ix++) {
        const step1 = (seed % 17374 + 345) * 23;
        step2 = step1 % 313131 * 17;
    }
    return step2 % max;
}

function createFile(fname, size) {
    fs.writeFile(fname, 'Das ist mein Inhalt', () => {
        console.log('Nun bin ich eigentlich erst fertig.')
    });
}

console.log('Programmstart');
console.log(`Der Eventloop wurde gestartet, erster Vorgang/Task war die 
    Ausführung dieses Scripts`);

// console.log(createRandomNumber(100));
createFile('demo.txt');
console.log('Datei geschrieben');

setImmediate(() => {
    console.log('Wann werde ich ausgeführt? Erster Task in der Immediate-Queue nach den fälligen Timern');
    
})

    
const timer1 = setInterval(() => {
    console.log('Interval (Timerqueue) alle 0,5s');    
}, 500);

setTimeout(() => {
    console.log('Timerqueue nach 5s');
    clearInterval(timer1);
  
}, 5000);

setTimeout(() => {
    console.log('Wann werde ich ausgeführt? Erster Timer-Task nach Script-Ende')    
}, 0);

process.nextTick(() => {
    console.log('Wann werde ich ausgeführt?');
    setTimeout(() => console.log('TIMEOUT - Last'),0 );
    setImmediate(() => { console.log('IMMEDIATE - Second'); console.log(createRandomNumber(100)); })
    process.nextTick(() => console.log('NEXTTICK - First'));
});

// wait(3000);

console.log('Ende des Scripts');
console.log('Nicht notwendigerweise auch Ende des Programms');
console.log('Programmende ist erst, wenn alle Queues leer sind!');
