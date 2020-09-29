import {createRouter, createWebHistory} from 'vue-router'


const routes = [
    {
        path: '/',
        name: 'Home', 
        meta: {layout: 'main'},
        component: () => import('@/views/Home.vue')
    },
    {
        path: '/todos',
        name: 'Todo', 
        meta: {layout: 'main'},
        component: () => import('@/views/Todo.vue')
    },
    {
        path: '/posts',
        name: 'Posts', 
        meta: {layout: 'main'},
        component: () => import('@/views/Posts.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router