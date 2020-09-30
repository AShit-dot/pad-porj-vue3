import {createRouter, createWebHistory} from 'vue-router'


const routes = [
    {
        path: '/',
        name: 'Home', 
        meta: {layout: 'main'},
        component: () => import('@/views/Home.vue')
    },
    {
        path: '/posts',
        name: 'Posts', 
        meta: {layout: 'main'},
        component: () => import('@/views/Posts.vue')
    },
    {
        path: '/posts/:postId',
        name: 'Post', 
        meta: {layout: 'main'},
        component: () => import('@/views/Post.vue')
    },
    {
        path: '/about_me',
        name: 'AboutMe', 
        meta: {layout: 'main'},
        component: () => import('@/views/AboutMe.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router