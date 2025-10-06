<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type { User } from '@/types/user'

const route = useRoute()
const router = useRouter()

const users = ref<User[]>([
  { id: 1, name: 'Іван Петренко', age: 28, occupation: 'Програміст' },
  { id: 2, name: 'Марія Коваленко', age: 25, occupation: 'Дизайнер' },
  { id: 3, name: 'Олександр Шевченко', age: 32, occupation: 'Менеджер' },
  { id: 4, name: 'Анна Мельник', age: 30, occupation: 'Маркетолог' }
])

const userId = ref<number | null>(null)
const tableColor = ref<string>('#000000')
const tableBackground = ref<string>('#ffffff')

onMounted(() => {
  if (route.params.id) {
    userId.value = Number(route.params.id)
  }

  if (route.query.tableColor) {
    tableColor.value = String(route.query.tableColor)
  }
  if (route.query.tableBackground) {
    tableBackground.value = String(route.query.tableBackground)
  }
})

const currentUser = computed(() => {
  if (userId.value === null) return null
  return users.value.find(user => user.id === userId.value)
})

const goBack = () => {
  router.push({ name: 'home' })
}
</script>

<template>
  <div class="profile-page">
    <div class="container">
      <h1>Сторінка профілю</h1>

      <div v-if="currentUser" class="user-info">
        <h2>Дані користувача #{{ userId }}</h2>

        <table
            class="user-table"
            :style="{
            color: tableColor,
            backgroundColor: tableBackground
          }"
        >
          <thead>
          <tr>
            <th>Поле</th>
            <th>Значення</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>ID</td>
            <td>{{ currentUser.id }}</td>
          </tr>
          <tr>
            <td>Ім'я</td>
            <td>{{ currentUser.name }}</td>
          </tr>
          <tr>
            <td>Вік</td>
            <td>{{ currentUser.age }}</td>
          </tr>
          <tr>
            <td>Професія</td>
            <td>{{ currentUser.occupation }}</td>
          </tr>
          </tbody>
        </table>
      </div>

      <div v-else class="not-found">
        <p v-if="userId !== null">
          Користувача з ID {{ userId }} не знайдено
        </p>
        <p v-else>
          ID користувача не передано
        </p>
      </div>

      <div class="all-users">
        <h3>Доступні користувачі:</h3>
        <ul>
          <li v-for="user in users" :key="user.id">
            <strong>ID {{ user.id }}:</strong> {{ user.name }}
          </li>
        </ul>
      </div>

      <button @click="goBack" class="btn-back">
        ← Повернутися назад
      </button>
    </div>
  </div>
</template>

<style scoped>
.profile-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  padding: 20px;
}

.container {
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  max-width: 700px;
  width: 100%;
}

h1 {
  margin-bottom: 30px;
  color: #333;
  text-align: center;
}

h2 {
  margin-bottom: 20px;
  color: #555;
}

.user-info {
  margin-bottom: 30px;
}

.user-table {
  width: 100%;
  border-collapse: collapse;
  border-radius: 8px;
  overflow: hidden;
}

.user-table th,
.user-table td {
  padding: 15px;
  text-align: left;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.user-table th {
  font-weight: 600;
}

.not-found {
  background: #fff3cd;
  border: 2px solid #ffc107;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 30px;
  text-align: center;
  color: #856404;
}

.all-users {
  margin-bottom: 30px;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
}

.all-users h3 {
  margin-bottom: 15px;
  color: #333;
}

.all-users ul {
  list-style: none;
  padding: 0;
}

.all-users li {
  padding: 8px 0;
  color: #555;
}

.btn-back {
  width: 100%;
  padding: 14px;
  background: #6c757d;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
}

.btn-back:hover {
  background: #5a6268;
}
</style>