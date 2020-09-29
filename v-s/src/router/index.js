
import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: "Home",
        meta: {layout: 'main'},
        component: () => import('@/views/Home.vue')
    },
    {
        path: '/about',
        name: "About",
        meta: {layout: 'main'},
        component: () => import('@/views/About.vue')
    },
    {
        path: '/:userId',
        name: "Profile",
        meta: {layout: 'main', requiresAdmin: true},
        component: () => import('@/views/Profile.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach(async (to, from, next) => {
    const isAdmin = true;
    const requiresAdmin = to.matched.some(record => record.meta.requiresAdmin)

    if(requiresAdmin && !isAdmin) next({name: 'Home'})
    else next()
})

export default router;