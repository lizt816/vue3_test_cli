const routes = [
    {
        name: 'a',
        path: '/',
        component: () => import('@/views/index')
    },
    {
        name: 'setup',
        path: '/setup',
        component: () => import('@/views/setup')
    },
    {
        name: 'ref函数',
        path: '/ref',
        component: () => import('@/views/ref')
    },
    {
        name: 'props父传子',
        path: '/props',
        component: () => import('@/views/props')
    },
    {
        name: 'computed',
        path: '/computed',
        component: () => import('@/views/computed')
    },
    {
        name: 'watch',
        path: '/watch',
        component: () => import('@/views/watch')
    },
];

export default routes