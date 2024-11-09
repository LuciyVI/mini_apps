<template>
    <div class="friends-container">
      <header class="friends-header">
        <h2>Друзья</h2>
        <button class="close-button">✖️</button>
      </header>
  
      <div class="invite-info">
        <p>Приглашайте друзей и получайте до 20% с их Airdrop.</p>
        <div class="invite-stats">
          <div class="stat-item">
            <span>Вы пригласили в игру:</span>
            <div class="stat-value">
              <img src="/invite-icon.png" alt="Invite Icon" class="invite-icon" />
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
        <button class="invite-button">Пригласить друзей</button>
      </div>
  
      <div class="friends-list">
        <div
          v-for="(friend, index) in friends"
          :key="friend.id"
          class="friend-item"
        >
          <div class="friend-rank">{{ index + 1 }}</div>
          <div class="friend-info">
            <img src="/avatar-placeholder.png" alt="Avatar" class="avatar" />
            <span class="friend-name">{{ friend.name }}</span>
          </div>
          <div class="friend-earnings">{{ friend.earnings.toFixed(2) }}</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        friends: [
          { id: 1, name: 'Вова Кузнецов', earnings: 313.54 },
          { id: 2, name: 'Azimut Dinasty', earnings: 311.76 },
          { id: 3, name: 'Gonus Avrles', earnings: 309.42 },
          { id: 4, name: 'Сергей Хой', earnings: 304.21 },
          { id: 5, name: 'Michael Gorst', earnings: 302.12 },
        ],
      };
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
  
  .friends-list {
    margin-top: 10px;
  }
  
  .friend-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    background-color: #1e2e4f;
    border-radius: 10px;
    margin-bottom: 10px;
  }
  
  .friend-rank {
    color: #3a82f7;
  }
  
  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  
  .friend-name {
    color: #ffffff;
  }
  
  .friend-earnings {
    color: #4caf50;
  }
  </style>v