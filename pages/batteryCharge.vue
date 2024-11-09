<template>
    <div class="charge-container">
      <header class="header">
        <img src="~/static/energy.png" alt="Battery Icon" class="header-icon" />
        <button class="close-button" @click="close">✖️</button>
      </header>
      <h2>Заряд батарейки</h2>
      <p>Выберите батарейку для заряда</p>
  
      <div class="battery-list">
        <div
          v-for="(battery, index) in batteries"
          :key="index"
          class="battery-item"
          :class="{ locked: !battery.unlocked }"
        >
          <span class="battery-energy">{{ battery.energy }} ENERGY</span>
          <button
            v-if="battery.unlocked"
            class="charge-button"
            @click="goToEnergyPage(battery)"
          >
            Зарядить
          </button>
          <span v-else class="lock-icon">🔒</span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        batteries: [
          { energy: 0.1, unlocked: true },
          { energy: 0.25, unlocked: true },
          { energy: 0.5, unlocked: false },
          { energy: 1.0, unlocked: false },
          { energy: 3.0, unlocked: false },
          { energy: 5.0, unlocked: false },
          { energy: 10.0, unlocked: false }
        ]
      };
    },
    methods: {
      goToEnergyPage(battery) {
        // Перенаправляем пользователя на страницу energy.vue
        this.$router.push({
          path: '/energy',
          query: { energy: battery.energy }
        });
      },
      close() {
        this.$router.go(-1);
      }
    }
  };
  </script>
  
  <style scoped>
  .charge-container {
    width: 100%;
    max-width: 400px;
    margin: auto;
    padding: 20px;
    background-color: #0e1a30;
    color: #ffffff;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    text-align: center;
  }
  
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .header-icon {
    width: 40px;
    height: 40px;
  }
  
  .close-button {
    background: none;
    border: none;
    color: #ffffff;
    font-size: 1.2em;
    cursor: pointer;
  }
  
  h2 {
    margin: 15px 0;
    font-size: 1.4em;
  }
  
  p {
    font-size: 1em;
    color: #cccccc;
  }
  
  .battery-list {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .battery-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;
    background-color: #1e2e4f;
    border-radius: 8px;
    transition: background-color 0.3s;
  }
  
  .battery-item.locked {
    background-color: #2d3b5a;
    opacity: 0.6;
  }
  
  .battery-energy {
    font-size: 1em;
    color: #ffffff;
  }
  
  .charge-button {
    background-color: #3a82f7;
    color: #ffffff;
    padding: 8px 16px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .charge-button:hover {
    background-color: #2a6cd4;
  }
  
  .lock-icon {
    color: #f0ad4e;
    font-size: 1.2em;
  }
  </style>