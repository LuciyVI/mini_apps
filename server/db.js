import Database from 'better-sqlite3';
import path from 'path';

// Указываем путь к базе данных
const dbPath = path.resolve('data', 'app.db');

// Инициализируем базу данных
const db = new Database(dbPath);

// Создаём таблицу, если её нет
// Создание таблицы пользователей
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    telegram_id TEXT UNIQUE NOT NULL,
    username TEXT NOT NULL
  );
`);
export default db;