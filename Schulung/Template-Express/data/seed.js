import sqlite3 from 'sqlite3';
const db = new sqlite3.Database(import.meta.dirname + '/dev.db');

db.run(
  `
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    firstname TEXT,
    lastname TEXT
  )
  `,
  (result) => {
    if (!result) {
      console.log('Tabelle users angelegt');
    } else {
      console.log(result);
    }
  },
);
