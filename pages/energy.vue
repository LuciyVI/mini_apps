<template>
    <div class="energy-container">
      <header class="header">
        <img src="energy.png" alt="Energy Icon" class="energy-icon" />
        <button class="close-button" @click="close">✖️</button>
      </header>
      <h2>Получение энергии</h2>
      <p>Обменяйте TON на ENERGY</p>
  
      <div class="exchange-options">
        <div
          v-for="(option, index) in options"
          :key="index"
          class="exchange-option"
          :class="{ selected: selectedOption === index }"
          @click="selectOption(index)"
        >
          <span class="ton-amount">{{ option.ton }} TON</span>
          <span class="equal-sign">=</span>
          <span class="energy-amount">{{ option.energy }} ENERGY</span>
        </div>
      </div>
  
      <button class="exchange-button" @click="exchange">Обменять</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedOption: null,
        options: [
          { ton: 0.5, energy: 0.5 },
          { ton: 1.0, energy: 1.0 },
          { ton: 2.0, energy: 2.0 },
          { ton: 5.0, energy: 5.0 },
          { ton: 10.0, energy: 10.0 }
        ]
      };
    },
    methods: {
      selectOption(index) {
        this.selectedOption = index;
      },
      exchange() {
  if (this.selectedOption !== null) {
    alert(`Вы обменяли ${this.options[this.selectedOption].ton} TON на ${this.options[this.selectedOption].energy} ENERGY`);
  } else {
    alert('Пожалуйста, выберите вариант обмена');
  }
},
      close() {
        this.$router.go(-1); // Закрытие модального окна (переход назад)
      }
    }
  };
  </script>
  
  <style scoped>
  .energy-container {
    width: 100%;
    max-width: 400px;
    margin: auto;
    padding: 20px;
    background-color: #0e1a30;
    color: #ffffff;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    text-align: center;
    font-family: Arial, sans-serif;
  }
  
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .energy-icon {
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
  
  .exchange-options {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .exchange-option {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;
    background-color: #1e2e4f;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .exchange-option.selected {
    background-color: #3a4a6b;
    border: 2px solid #5b8dee;
  }
  
  .ton-amount, .equal-sign, .energy-amount {
    font-size: 1em;
    color: #ffffff;
  }
  
  .exchange-button {
    width: 100%;
    margin-top: 20px;
    padding: 12px;
    background-color: #3a82f7;
    color: #ffffff;
    font-size: 1.1em;
    font-weight: bold;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .exchange-button:hover {
    background-color: #2a6cd4;
  }
  </style>