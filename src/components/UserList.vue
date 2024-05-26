<template>
  <div class="container mx-auto px-4">
    <h1 class="text-2xl font-bold mb-6 text-center">Users</h1>
    <ul class="space-y-4">
      <li v-for="user in users" 
        :key="user.id" 
        class="flex 
          justify-between 
          items-center 
          p-4 bg-white 
          rounded 
          shadow"
      >
        <span class="text-lg">Name: {{ user.name }}
        <br>Username: {{ user.username }}
        <br>
        Email: {{ user.email }}</span>
        <span class="text-lg"></span>
        <router-link :to="{ name: 'UserPosts', params: { id: user.id } }"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          See Posts
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import { API_BASE_URL } from '../api/config.js'

export default {
  data() {
    return {
      users: []
    }
  },
  created() {
    axios.get(`${API_BASE_URL}/users`)
      .then(response => {
        this.users = response.data
      })
  }
}
</script>
