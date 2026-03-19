<template>
  <div class="login-page">
    <div class="login-container">
      <h1>Connexion Corsidonie</h1>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="email">Email</label>
          <input
            id="email"
            v-model="email"
            type="email"
            placeholder="votre.email@exemple.com"
            required
          />
        </div>
        <div class="form-group">
          <label for="password">Mot de passe</label>
          <input
            id="password"
            v-model="password"
            type="password"
            placeholder="Entrez votre mot de passe"
            required
          />
        </div>
        <div v-if="error" class="error-message">{{ error }}</div>
        <button type="submit" class="login-submit-btn">Se connecter</button>
      </form>
      <button class="back-btn" @click="$emit('logout')">← Retour</button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'LoginPage',
  emits: ['logged-in', 'logout'],
  setup(props, { emit }) {
    const email = ref('')
    const password = ref('')
    const error = ref('')

    const handleLogin = () => {
      if (!email.value || !password.value) {
        error.value = 'Veuillez remplir tous les champs'
        return
      }

      // Simple demp login - just store in localStorage
      const userData = {
        email: email.value,
        name: email.value.split('@')[0]
      }

      localStorage.setItem('corsidonie_user', JSON.stringify(userData))
      emit('logged-in', userData)
    }

    return {
      email,
      password,
      error,
      handleLogin
    }
  }
}
</script>

<style scoped>
.login-page {
  background: linear-gradient(135deg, var(--primary-blue) 0%, var(--light-blue) 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.login-container {
  background-color: var(--white);
  border-radius: 10px;
  padding: 3rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 400px;
}

.login-container h1 {
  text-align: center;
  color: var(--primary-blue);
  margin-bottom: 2rem;
  font-size: 1.8rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--dark-gray);
  font-weight: 500;
}

.form-group input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

.form-group input:focus {
  outline: none;
  border-color: var(--primary-blue);
  box-shadow: 0 0 5px rgba(0, 102, 204, 0.3);
}

.error-message {
  color: #d32f2f;
  margin-bottom: 1rem;
  padding: 0.75rem;
  background-color: #ffebee;
  border-radius: 5px;
  border-left: 4px solid #d32f2f;
}

.login-submit-btn {
  width: 100%;
  padding: 0.75rem;
  background-color: var(--primary-blue);
  color: var(--white);
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
}

.login-submit-btn:hover {
  background-color: var(--dark-blue);
}

.demo-hint {
  text-align: center;
  color: #666;
  margin-top: 1.5rem;
  font-size: 0.9rem;
}

.back-btn {
  width: 100%;
  padding: 0.5rem;
  margin-top: 1rem;
  background-color: #f0f0f0;
  color: var(--dark-gray);
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.back-btn:hover {
  background-color: #e0e0e0;
}
</style>
