import db from '../db.js';

export default defineEventHandler(async (event) => {
  const { query } = getQuery(event);

  if (query.action === 'create') {
    const { username, telegram_id } = query;

    // Добавление нового пользователя
    const stmt = db.prepare(`
      INSERT INTO users (username, telegram_id) 
      VALUES (?, ?)
    `);

    try {
      const result = stmt.run(username, telegram_id);
      return { success: true, userId: result.lastInsertRowid };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  if (query.action === 'get') {
    const { telegram_id } = query;

    // Получение пользователя
    const stmt = db.prepare(`
      SELECT * FROM users WHERE telegram_id = ?
    `);

    const user = stmt.get(telegram_id);
    if (user) {
      return { success: true, user };
    } else {
      return { success: false, error: 'User not found' };
    }
  }

  return { success: false, error: 'Invalid action' };
});