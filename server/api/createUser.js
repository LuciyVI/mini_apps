import db from '../db.js';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const telegramId = body.telegramId;
  const username = body.username || 'Anonymous';

  if (!telegramId) {
    return { success: false, error: 'Telegram ID is required' };
  }

  try {
    // Проверяем, существует ли пользователь
    const stmtGetUser = db.prepare('SELECT * FROM users WHERE telegram_id = ?');
    const user = stmtGetUser.get(telegramId);

    if (user) {
      return { success: true, user, message: 'User already exists' };
    }

    // Создаём нового пользователя
    const stmtInsertUser = db.prepare('INSERT INTO users (telegram_id, username) VALUES (?, ?)');
    const result = stmtInsertUser.run(telegramId, username);

    return {
      success: true,
      user: {
        id: result.lastInsertRowid,
        telegram_id: telegramId,
        username: username,
      },
    };
  } catch (error) {
    return { success: false, error: error.message };
  }
});