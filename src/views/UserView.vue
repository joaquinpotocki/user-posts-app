<template>
  <div class="container mx-auto p-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <UserList @view-posts="viewPosts" />
      </div>
      <div v-if="selectedUserId">
        <UserPosts :userId="selectedUserId" />
      </div>
    </div>
  </div>
</template>

<script>
import UserList from '../components/UserList.vue'
import UserPosts from '../components/UserPosts.vue'

export default {
  components: {
    UserList,
    UserPosts
  },
  data() {
    return {
      selectedUserId: null
    }
  },
  methods: {
    viewPosts(userId) {
      this.selectedUserId = userId
    }
  }
}
</script>
