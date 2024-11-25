<template>
    <div class="battery-list">
      <div v-if="batteries.length === 0" class="no-batteries">
        <p>Нет доступных батареек</p>
      </div>
      <div v-else>
        <div v-for="battery in batteries" :key="battery.id" class="battery">
          <div class="battery-level" :style="{ height: battery.level + '%' }">
            <span class="battery-percentage">{{ battery.level }}%</span>
          </div>
          <p>{{ battery.name }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      batteries: {
        type: Array,
        default: () => {
          // Генерация массива из 12 полностью заряженных батареек
          return Array.from({ length: 12 }, (_, index) => ({
            id: index + 1,
            name: 'Battery ${index + 1}',
            level: 100, // Полностью заряжена
          }));
        },
      },
    },
  };
  </script>
  
  <style scoped>
  .battery-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 20px;
    padding: 20px;
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
    background-color: #5cb85c; /* Зеленый цвет для полностью заряженных батареек */
    width: 100%;
    position: absolute;
    bottom: 0;
    transition: height 0.3s ease;
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
  
  .no-batteries {
    text-align: center;
    color: #ccc;
    font-size: 1.2em;
  }
  </style>