<template>
  <div class="friends-container">
    <header class="friends-header">
      <NuxtLink to="/frends" class="nav-button">Друзья</NuxtLink>
      <NuxtLink to="/" class="nav-button">✖️</NuxtLink>
    </header>

    <div class="invite-info">
      <p>Приглашайте друзей и получайте до 20% с их Airdrop.</p>
      <div class="invite-stats">
        <div class="stat-item">
          <span>Вы пригласили в игру:</span>
          <div class="stat-value">
            <img src="~/assets/frends48x48.png" alt="Invite Icon" class="invite-icon" />
            <span>13</span>
          </div>
        </div>
        <div class="stat-item">
          <span>Airdrop с приглашений:</span>
          <div class="stat-value">
            <span>2386.21</span>
          </div>
        </div>
      </div>
      <!-- Кнопка с функционалом приглашения -->
      <button class="invite-button" @click="inviteFriends">Пригласить друзей</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      referralLink: 'https://t.me/chargedbatterybot', // Уникальная реферальная ссылка
    };
  },
  methods: {
    inviteFriends() {
      const message = "Присоединяйтесь к нашей игре! Вот ваша реферальная ссылка: ${this.referralLink}";
      const telegramUrl = "https://t.me/share/url?url=${encodeURIComponent(this.referralLink)}&text=${encodeURIComponent(message)}";
      window.open(telegramUrl, '_blank');
    },
  },
};
</script>

<style scoped>
.friends-container {
  width: 400px;
  max-width: 100%;
  margin: auto;
  padding: 20px;
  background-color: #0e1a30;
  color: #ffffff;
  border-radius: 15px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}

.friends-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.nav-button {
  background: none;
  color: #3a82f7;
  font-size: 1.2em;
  cursor: pointer;
  text-decoration: none;
}

.close-button {
  background: none;
  border: none;
  color: #fff;
  font-size: 1.2em;
  cursor: pointer;
}

.invite-info {
  background-color: #1c2b48;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 20px;
}

.invite-stats {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 10px;
}

.invite-icon {
  width: 24px;
  height: 24px;
}

.invite-button {
  background-color: #3a82f7;
  color: #ffffff;
  padding: 10px;
  border-radius: 8px;
  width: 100%;
  text-align: center;
  cursor: pointer;
}

.invite-button:hover {
  background-color: #2a6cd4;
}
</style>