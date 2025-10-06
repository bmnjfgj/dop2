import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../view/HomeView.vue'
import ProfileView from '../view/ProfileView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/home',
            redirect: '/'
        },
        {
            path: '/profile/:id?',
            name: 'profile',
            component: ProfileView
        }
    ]
})

export default router