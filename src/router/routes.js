import msite from '../pages/Msite/Msite.vue'
import order from '../pages/Order/Order.vue'
import profile from '../pages/Profile/Profile.vue'
import search from '../pages/Search/Search.vue'
import Login from '../pages/login/lgoin.vue'
export default [
  {
    path: '/msite',
    component: msite,
    meta:{
      isFootshow:true
    }
  },
  {
    path: '/order',
    component: order,
    meta:{
      isFootshow:true
    }
  },
  {
    path: '/profile',
    component: profile,
    meta:{
      isFootshow:true
    }
  },
  {
    path: '/search',
    component: search,
    meta:{
      isFootshow:true
    }
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    redirect:'/msite'
  }
]