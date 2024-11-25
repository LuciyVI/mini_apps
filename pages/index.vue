<template>
  <div class="battery-container">
    <header class="top-bar">
      <NuxtLink to="frends" class="nav-button">Друзья</NuxtLink>
      <div class="balance">
        <img src="energy.png" alt="Energy Icon" class="energy-icon" />
        <span class="balance-text">БАЛАНС ENERGY</span>
        <span class="balance-amount">{{ balance }}</span>
      </div>
      <button class="nav-button">Настройки</button>
    </header>
    
    <div class="battery-status">
      <button class="nav-arrow" @click="prevBattery">❮</button>
      <div class="battery">
        <!-- Уровень заряда батарейки -->
        <div class="battery-level" :style="{ height: currentBattery.level + '%' }"></div>
        <!-- Вывод процента заряда -->
        <div class="battery-details">
          <span class="battery-name">{{ currentBattery.name }}</span>
          <span class="battery-percentage">{{ Math.max(0, currentBattery.level) }}%</span>
        </div>
      </div>
      <button class="nav-arrow" @click="nextBattery">❯</button>
    </div>

    <div class="charge-button-container">
      <router-link to="/energy" class="charge-button">⚡️ Зарядить ⚡️</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      balance: 10.24,
      batteries: [], // Массив всех батареек
      currentIndex: 0, // Индекс текущей батарейки
      timer: null, // Таймер для уменьшения заряда
    };
  },
  computed: {
    // Текущая батарейка
    currentBattery() {
      return this.batteries[this.currentIndex] || { name: "Battery", level: 100 };
    },
  },
  mounted() {
    this.generateDefaultBatteries();
    this.startBatteryDrain();
  },
  beforeDestroy() {
    this.stopBatteryDrain();
  },
  methods: {
    // Генерация батареек по умолчанию
    generateDefaultBatteries() {
      this.batteries = Array.from({ length: 12 }, (_, index) => ({
        id: index + 1,
        name: "Battery",
        level: 100, // Полный заряд
      }));
    },
    // Переключение на предыдущую батарейку
    prevBattery() {
      this.currentIndex =
        (this.currentIndex - 1 + this.batteries.length) % this.batteries.length;
    },
    // Переключение на следующую батарейку
    nextBattery() {
      this.currentIndex = (this.currentIndex + 1) % this.batteries.length;
    },
    // Запуск уменьшения заряда батарейки
    startBatteryDrain() {
      const drainRate = 100 / (12 * 60); // 100% за 12 минут
      this.timer = setInterval(() => {
        this.batteries[this.currentIndex].level -= drainRate;
        if (this.batteries[this.currentIndex].level <= 0) {
          this.batteries[this.currentIndex].level = 0;
          this.stopBatteryDrain();
        }
      }, 1000); // Обновление каждую секунду
    },
    // Остановка уменьшения заряда
    stopBatteryDrain() {
      clearInterval(this.timer);
    },
  },
};
</script>

<style scoped>
.battery-container {
  width: 100%;
  max-width: 600px;
  margin: auto;
  padding: 20px;
  background-color: #0e1a30;
  color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  box-sizing: border-box;
}

.top-bar {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1e2e4f;
  padding: 10px;
  border-radius: 10px;
}

.nav-button {
  background-color: #323c57;
  color: #fff;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
}

.balance {
  display: flex;
  align-items: center;
  gap: 5px;
  color: #fff;
}

.energy-icon {
  width: 24px;
  height: 24px;
}

.balance-text {
  font-size: 0.9em;
}

.balance-amount {
  font-size: 1.2em;
  font-weight: bold;
}

.battery-status {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 20px 0;
}

.nav-arrow {
  background: none;
  border: none;
  color: #fff;
  font-size: 2em;
  cursor: pointer;
}
.battery {
  width: 100px;
  height: 200px;
  background-color: #2d3b5a;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  color: white;
}

.battery-level {
  background-color: #5cb85c; /* Зеленый цвет для полного заряда */
  width: 100%;
  position: absolute;
  bottom: 0;
  transition: height 0.3s ease;
}

.battery-details {
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
  font-weight: bold;
}

.battery-name {
  display: block;
  font-size: 1em;
}

.battery-percentage {
  font-size: 1.5em;
}

.charge-button-container {
  margin-top: 20px;
  width: 100%;
}

.charge-button {
  background-color: #3a82f7;
  color: #ffffff;
  padding: 12px;
  border-radius: 8px;
  font-size: 1.1em;
  font-weight: bold;
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s;
}

.charge-button:hover {
  background-color: #2a6cd4;
}
</style>