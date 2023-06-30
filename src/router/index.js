import { createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('../components/MiniFlow')
        },
        {
            path: '/test',
            component: () => import('../components/testMyu')
        }
    ],
})

export default router