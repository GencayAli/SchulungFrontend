import path from 'node:path';

import cors from 'cors';
import express from 'express';
import morgan from 'morgan';

import { router as usersRouter } from './src/routes/api/users.js';

const app = express();

// Best practices: Security - Remove fingerprint
app.disable('x-powered-by');

// Middleware: Logging
// Eine Logging-Middleware sitzt immer ganz weit oben
app.use(morgan('tiny'));

// Middleware: Cors
// Cors-Middleware nutzen falls es eine Backend/Client Trennung gibt
app.use('/api', cors());

// Middleware: Auth
// Eine Auth-Middleware sitzt durchaus recht weit oben
app.use('/admin', (req, res) => {
  res.statusCode = 302;
  res.location('/login');
  res.end();
});

app.use('/api/users', usersRouter);

// Middleware: Static Files
// Platziert hinter allen definierten Routen als Fallback
app.use(express.static(path.join(import.meta.dirname, 'public')));

// Middleware: Custom 404
app.use((req, res) => {
  res.status(404).send(`<h2>Lost in Space: ${req.path}</h2>`);
});

// Middleware: Error Handler
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send(`<h2>Ups: ${err.message}</h2>`);
});

const port = 3000;
const host = 'localhost';
app.listen(port, () => {
  console.log(`Server started at http://${host}:${port}`);
});
