import Vue from 'vue'
import Router from 'vue-router'
// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'

Vue.use(Router)

const routes = [{
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: () =>
            import ('../components/Home'),
        children: [
            // {
            //     path: '',
            //     redirect: 'news'
            // }, 
            {
                path: 'news',
                component: () =>
                    import ('../components/HomeNews'),
            },
            {
                path: 'message',
                component: () =>
                    import ('../components/HomeMessage'),
            }
        ],
        meta: {
            title: '首页'
        }
    },
    {
        path: '/about',
        component: () =>
            import ('../components/About'),
        meta: {
            title: '关于'
        },
        beforeEnter: (to, from, next) => {
            // console.log('about beforeEnter')
            next()
        }
    },
    {
        path: '/user/:id',
        component: () =>
            import ('../components/User'),
        meta: {
            title: '用户'
        }
    },
    {
        path: '/profile',
        component: () =>
            import ('../components/Profile'),
        meta: {
            title: '档案'
        }
    }
]

const router = new Router({
        routes,
        mode: 'history'
    })
    //前置守卫(guard)
router.beforeEach((to, from, next) => {
        document.title = to.matched[0].meta.title
            // console.log('++++++++');
        next()
    })
    //后置钩子(hook)
router.afterEach((to, from) => {
    // console.log('---------');
})

export default router