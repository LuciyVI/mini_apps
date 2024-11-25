export default defineNuxtPlugin(() => {
  // Проверяем, доступен ли объект Telegram WebApp
  if (typeof window !== 'undefined' && window.Telegram && window.Telegram.WebApp) {
    const userData = window.Telegram.WebApp.initDataUnsafe?.user;

    if (userData) {
      console.log('Telegram user data:', userData);

      // Отправляем данные пользователя на сервер для создания или обновления
      fetch('/api/createUser', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          telegramId: userData.id,
          username: userData.username || 'Anonymous',
          firstName: userData.first_name || '',
          lastName: userData.last_name || '',
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            console.log('User created or fetched successfully:', data.user);
          } else {
            console.error('Error creating user:', data.error);
          }
        })
        .catch((err) => {
          console.error('Network error while creating user:', err);
        });
    } else {
      console.warn('No Telegram user data found');
    }
  } else {
    console.warn('Telegram WebApp is not available');
  }
});