import express from 'express';
import { db } from '../../db/index.js';

let users = [
  { id: 1, firstname: 'Christopher', lastname: 'Dietz' },
  { id: 2, firstname: 'Gian', lastname: 'Dotti' },
  { id: 3, firstname: 'David', lastname: 'Ehrenberg' },
  { id: 4, firstname: 'Mehmet Ali', lastname: 'Gencay' },
  { id: 5, firstname: 'Mykola', lastname: 'Havrysh' },
];

export let router = express.Router();

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.get('/', (req, res) => {
  db.all('SELECT id, firstname, lastname FROM users', (err, rows) => {
    res.json(rows);
  });
});

router.get('/:id', (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((_u) => _u.id === id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).send('Not found');
  }
});

router.post('/', (req, res) => {
  db.run(
    'INSERT INTO users (firstname, lastname) VALUES (?,?)',
    req.body.firstname,
    req.body.lastname,
    function (err) {
      if (!err) {
        res.status(201).json({ id: this.lastID, ...req.body });
      } else {
        throw new Error('Problem: ' + err);
      }
    },
  );
});

router.delete('/:id', (req, res) => {
  db.run('DELETE FROM users WHERE id=?', Number(req.params.id), function (err) {
    if (!err && this.changes === 1) {
      res.status(204).end();
    } else {
      res.status(404).end();
    }
  });
});
