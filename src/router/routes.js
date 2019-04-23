import msite from '../pages/Msite/Msite.vue'
import order from '../pages/Order/Order.vue'
import profile from '../pages/Profile/Profile.vue'
import search from '../pages/Search/Search.vue'
export default [
  {
    path: '/msite',
    component: msite
  },
  {
    path: '/order',
    component: order
  },
  {
    path: '/profile',
    component: profile
  },
  {
    path: '/search',
    component: search
  },
  {
    path: '/',
    redirect:'/msite'
  }
]