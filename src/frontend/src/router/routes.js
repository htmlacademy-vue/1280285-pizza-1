/* eslint-disable */ 
import Index from '../views/Index.vue'
import Cart from '../views/Cart.vue'
import Profile from '../views/Profile.vue'
import Login from '../views/Login.vue'
import Orders from '../views/Orders.vue'

export default [
    {
      path: '/',
      name: 'IndexHome',
      component: Index,
      meta: { layout: 'AppLayout' },
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
      meta: { layout: 'AppLayout' },
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: { layout: 'AppLayout' },
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile,
        meta: { layout: 'AppLayout' },
    },
    {
        path: '/orders',
        name: 'Orders',
        component: Orders,
        meta: { layout: 'AppLayout' },
    },
];