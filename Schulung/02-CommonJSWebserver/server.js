// Funktion: require - CommonJS Module-System

const http = require('node:http');

const server = http.createServer((req, res) => {
    
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello World</h1>');
})

const port = 3000;
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

