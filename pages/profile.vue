<template>
    <div class="profile-container">
      <img :src="user.avatarUrl" alt="User Avatar" v-if="user.avatarUrl" />
      <h1>Добро пожаловать, {{ user.firstName }}</h1>
      <p>ID: {{ user.id }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        user: {},
      };
    },
    mounted() {
      if (typeof window.Telegram !== "undefined") {
        const userData = window.Telegram.WebApp.initDataUnsafe;
  
        this.user = {
          id: userData.user?.id,
          firstName: userData.user?.first_name || "Гость",
          lastName: userData.user?.last_name || "",
          username: userData.user?.username || "",
          avatarUrl: userData.user?.photo_url || "",
        };
  
        console.log(this.user);
      }
    },
  };
  </script>
  
  <style scoped>
  .profile-container {
    text-align: center;
    padding: 20px;
  }
  .profile-container img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  </style>