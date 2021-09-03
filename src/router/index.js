import {
    createRouter,
    createWebHistory,
} from 'vue-router'
import { auth } from '../firebase/firebaseAuth'
import Home from '../views/Home.vue'
import InvoiceView from '../views/InvoiceView.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
    },
    {
        path: "/invoice/:invoiceId",
        name: "Invoice",
        component: InvoiceView,
    },
];


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(x => x.meta.requiresAuth)

    if (requiresAuth && !auth.currentUser) {
        next('/login')
    } else {
        next()
    }
})

// router.beforeEach((to, next) => {
//   if (to.matched.some(record => record.meta.authRequired)) {
//     if (auth.currentUser) {
//       next();
//     } else {
//       alert('You must be logged in to see this page');
//       next({
//         path: '/',
//       });
//     }
//   } else {
//     next();
//   }
// });

export default router;