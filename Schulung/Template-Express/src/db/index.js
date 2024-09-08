import path from 'node:path';
import sqlite3 from 'sqlite3';

const dbPath = path.join(import.meta.dirname, '..', '..', 'data', 'dev.db');
export const db = new sqlite3.Database(dbPath);
