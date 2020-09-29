import {createRouter, createWebHistory} from 'vue-router'


const routes = [
    {
        path: '/',
        name: 'Home', 
        meta: {layout: 'main'},
        component: () => import('@/views/Home.vue')
    },
    {
        path: '/todo',
        name: 'Todo', 
        meta: {layout: 'main'},
        component: () => import('@/views/Todo.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router