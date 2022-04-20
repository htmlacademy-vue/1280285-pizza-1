/* eslint-disable */ 
import Index from '@/views/Index.vue'
import Cart from '@/views/Cart.vue'
import Profile from '@/views/Profile.vue'
import Login from '@/views/Login.vue'
import Orders from '@/views/Orders.vue'
import Popup from '@/views/Popup.vue'

export default [
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta: { layout: 'AppLayoutDefault' },
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
      meta: { layout: 'AppLayoutDefault' },
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: { layout: 'AppLayoutDefault' },
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile,
        meta: { layout: 'AppLayoutDefault' },
    },
    {
        path: '/orders',
        name: 'Orders',
        component: Orders,
        meta: { layout: 'AppLayoutDefault' },
    },
    {
      path: '/popup',
      name: 'Popup',
      component: Popup,
      meta: { layout: 'AppLayoutDefault' },
    }
];