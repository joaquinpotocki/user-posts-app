import { createRouter, createWebHistory } from 'vue-router'
import UserList from '../components/UserList.vue'
import UserPosts from '../components/UserPosts.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: UserList
  },
  {
    path: '/user/:id/posts',
    name: 'UserPosts',
    component: UserPosts,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
