<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const userId = ref<number>(1)
const tableColor = ref<string>('#2563eb')
const tableBackground = ref<string>('#dbeafe')

const goToProfile = () => {
  router.push({
    name: 'profile',
    params: { id: userId.value },
    query: {
      tableColor: tableColor.value,
      tableBackground: tableBackground.value
    }
  })
}
</script>

<template>
  <div class="home-page">
    <div class="container">
      <h1>Домашня сторінка</h1>

      <div class="form-group">
        <label for="userId">ID користувача:</label>
        <input
            id="userId"
            type="number"
            v-model.number="userId"
            placeholder="Введіть ID"
        />
      </div>

      <div class="form-group">
        <label for="tableColor">Колір тексту таблиці:</label>
        <input
            id="tableColor"
            type="color"
            v-model="tableColor"
        />
        <span class="color-value">{{ tableColor }}</span>
      </div>

      <div class="form-group">
        <label for="tableBackground">Колір фону таблиці:</label>
        <input
            id="tableBackground"
            type="color"
            v-model="tableBackground"
        />
        <span class="color-value">{{ tableBackground }}</span>
      </div>

      <button @click="goToProfile" class="btn-primary">
        Перейти до профілю
      </button>
    </div>
  </div>
</template>

<style scoped>
.home-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
}

.container {
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 100%;
}

h1 {
  margin-bottom: 30px;
  color: #333;
  text-align: center;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #555;
}

input[type="number"] {
  width: 100%;
  padding: 12px;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.3s;
}

input[type="number"]:focus {
  outline: none;
  border-color: #667eea;
}

input[type="color"] {
  width: 80px;
  height: 40px;
  border: 2px solid #ddd;
  border-radius: 8px;
  cursor: pointer;
}

.color-value {
  margin-left: 10px;
  color: #666;
  font-family: monospace;
}

.btn-primary {
  width: 100%;
  padding: 14px;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
  margin-top: 10px;
}

.btn-primary:hover {
  background: #5568d3;
}
</style>
