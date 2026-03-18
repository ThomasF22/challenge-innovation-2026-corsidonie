<template>
  <div class="app">
    <LandingPage v-if="currentPage === 'landing'" @login="handleLogin" />
    <LoginPage v-else-if="currentPage === 'login'" @logged-in="handleLoggedIn" />
    <DashboardPage v-else-if="currentPage === 'dashboard'" :user="user" @logout="handleLogout" />
  </div>
</template>

<script>
import { ref } from 'vue'
import LandingPage from './pages/LandingPage.vue'
import LoginPage from './pages/LoginPage.vue'
import DashboardPage from './pages/DashboardPage.vue'

export default {
  name: 'App',
  components: {
    LandingPage,
    LoginPage,
    DashboardPage
  },
  setup() {
    const currentPage = ref('landing')
    const user = ref(null)

    const handleLogin = () => {
      currentPage.value = 'login'
    }

    const handleLoggedIn = (userData) => {
      user.value = userData
      currentPage.value = 'dashboard'
    }

    const handleLogout = () => {
      user.value = null
      currentPage.value = 'landing'
    }

    return {
      currentPage,
      user,
      handleLogin,
      handleLoggedIn,
      handleLogout
    }
  }
}
</script>

<style>
:root {
  --primary-blue: #0066CC;
  --light-blue: #00A8E8;
  --dark-blue: #004BA8;
  --white: #FFFFFF;
  --light-gray: #f8f9fa;
  --dark-gray: #333333;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: var(--light-gray);
  color: var(--dark-gray);
}

.app {
  width: 100%;
  min-height: 100vh;
}
</style>
