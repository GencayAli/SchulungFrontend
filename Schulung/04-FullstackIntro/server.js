import { PrismaClient } from '@prisma/client';
import express from 'express';

const app = express();
const db = new PrismaClient();

// Middlewares
app.use((req, res, next) => {
    console.log(req.url);
    next();
});

app.use(express.static('public'))

// Routing

app.get('/demo', (req,res) => {
    db.person.findMany().then(data => res.json(data));
});

app.get('/api/todos', (req, res) => {
    res.json([{ id: 1, title: 'Express', completed: false }])
});

app.get('/hello', (req,res) => {
    const name = req.query.name;   // '/hello?name=Gerd
    res.send(`<h2>Hello ${name || 'World'}</h2>`);
});

app.get('/kurs/:titel', (req,res) => {
    const name = req.params.titel;   // '/kurs/webdev
    res.send(`<h2>Kurs: ${name}</h2>`);
});

// Server Start

app.listen(3000, () => {
    console.log('Express server at http://localhost:3000');
})
