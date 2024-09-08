const express = require('express');
const fs = require('node:fs');
const { buffer } = require('stream/consumers');

const app = express();


function createRandomNumber(max) {
    const seed = Date.now();
    let step2;

    for(let ix = 0; ix < 20_000_000_000; ix++) {
        const step1 = (seed % 17374 + 345) * 23;
        step2 = step1 % 313131 * 17;
    }
    return step2 % max;
}

app.get('/random', (req, res) => {
   
        const nr = createRandomNumber(1000);
        res.send(`<h2>${nr}</h2>`);
});

app.get('/counter', (req, res) => {
    
    fs.readFile('counter.txt', (err, data) => {
        let count = String(data);
        count++;
        fs.writeFile('counter.txt', String(count), () => {
            res.send(`<h2>${count}</h2>`);
        });
    });
    
});

app.use(express.static('public'));

app.listen(3000, () => {
    console.log('Server: http://localhost:3000');
})
