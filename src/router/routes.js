import msite from '../pages/Msite/Msite.vue'
import order from '../pages/Order/Order.vue'
import profile from '../pages/Profile/Profile.vue'
import search from '../pages/Search/Search.vue'
import Login from '../pages/login/lgoin.vue'
import Shops from '../pages/Shops/Shops.vue'
import ratings from '../pages/Shops/ratings/ratings.vue'
import info from '../pages/Shops/info/info.vue'
import goods from '../pages/Shops/goods/goods.vue'
export default [{
    path: '/msite',
    component: msite,
    meta: {
      isFootshow: true
    }
  },
  {
    path: '/order',
    component: order,
    meta: {
      isFootshow: true
    }
  },
  {
    path: '/profile',
    component: profile,
    meta: {
      isFootshow: true
    }
  },
  {
    path: '/search',
    component: search,
    meta: {
      isFootshow: true
    }
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/Shops',
    component: Shops,
    children:[
      {
        path:'/Shops/ratings',
        component:ratings
      },
      {
        path:'/Shops/info',
        component:info
      },
      {
        path:'/Shops/goods',
        component:goods
      },
    ]
  },
  {
    path: '/',
    redirect: '/msite'
  }
]