<template>
  <div class="battery-container">
    <header class="top-bar">
      <button class="nav-button">Друзья</button>
      <div class="balance">
        <img src="energy.png" alt="Energy Icon" class="energy-icon" />
        <span class="balance-text">БАЛАНС ENERGY</span>
        <span class="balance-amount">10.24</span>
      </div>
      <button class="nav-button">Настройки</button>
    </header>

    <div class="battery-status">
      <button class="nav-arrow" @click="prevBattery">❮</button>
      <div class="battery">
        <div
          class="battery-level"
          :style="{ height: currentBattery.level + '%', backgroundColor: getBatteryColor(currentBattery.level) }"
        >
          <span class="battery-percentage">{{ currentBattery.level }}%</span>
        </div>
      </div>
      <button class="nav-arrow" @click="nextBattery">❯</button>
    </div>

    <div class="battery-indicator">
      <span
        v-for="(battery, index) in batteries"
        :key="index"
        :class="['indicator-dot', { active: index === currentIndex }]"
      ></span>
    </div>

    <div class="charge-button-container">
      <router-link to="/batteryCharge" class="charge-button">⚡️ Зарядить ⚡️</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      batteries: [
        { id: 1, level: 33 },
        { id: 2, level: 45 },
        { id: 3, level: 67 },
        { id: 4, level: 20 },
        { id: 5, level: 80 },
        { id: 6, level: 55 },
        { id: 7, level: 90 },
        { id: 8, level: 10 },
        { id: 9, level: 75 },
        { id: 10, level: 60 },
        { id: 11, level: 50 },
        { id: 12, level: 85 },
      ],
      currentIndex: 0,
    };
  },
  computed: {
    currentBattery() {
      return this.batteries[this.currentIndex];
    },
  },
  methods: {
    prevBattery() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      } else {
        this.currentIndex = this.batteries.length - 1; // Переход к последней батарейке
      }
    },
    nextBattery() {
      if (this.currentIndex < this.batteries.length - 1) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0; // Переход к первой батарейке
      }
    },
    getBatteryColor(level) {
      if (level > 70) {
        return '#28a745'; // Зелёный
      } else if (level >= 30 && level <= 70) {
        return '#ffc107'; // Жёлтый
      } else {
        return '#dc3545'; // Красный
      }
    },
  },
};
</script>

<style scoped>
.battery-container {
  width: 100%;
  max-width: 400px;
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
  font-size: 1.5em;
  cursor: pointer;
  padding: 10px;
}

.battery {
  width: 100px;
  height: 200px;
  background-color: #2d3b5a;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  margin: 0 20px;
}

.battery-level {
  width: 100%;
  position: absolute;
  bottom: 0;
  transition: height 0.3s ease, background-color 0.3s ease;
}

.battery-percentage {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-weight: bold;
  font-size: 1.2em;
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

@media (max-width: 480px) {
  .charge-button {
    padding: 10px;
    font-size: 1em;
  }
}

.battery-indicator {
  display: flex;
  gap: 5px;
  margin-bottom: 20px;
}

.indicator-dot {
  width: 10px;
  height: 10px;
  background-color: #555;
  border-radius: 50%;
  transition: background-color 0.3s;
}

.indicator-dot.active {
  background-color: #3a82f7;
}
</style>
