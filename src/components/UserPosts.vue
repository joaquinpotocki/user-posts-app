<template>
  <div class="container mx-auto px-4">
    <div class="inline-flex">
      <button @click="$router.back()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Prev
      </button>
    </div>
    <h2 class="text-xl font-bold mb-6 text-center">User posts</h2>
    <ul class="space-y-4">
      <li v-for="post in posts" :key="post.id" class="p-4 bg-white rounded shadow">
        <h3 class="font-semibold text-lg">{{ post.title }}</h3>
        <p class="text-gray-700">{{ post.body }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import { API_BASE_URL } from '../api/config.js'

export default {
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      posts: []
    }
  },
  watch: {
    id: {
      immediate: true,
      handler(newId) {
        axios.get(`${API_BASE_URL}/posts?userId=${newId}`)
          .then(response => {
            this.posts = response.data
          })
      }
    }
  }
}
</script>
