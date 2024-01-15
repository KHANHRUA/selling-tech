import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Cart from '../views/CartView.vue' //giỏ hàng
import Search from '../views/SearchView.vue' // tìm kiếm theo danh mục có sẵn
import Product from '../views/ProductView.vue' //thông tin chi tiết sản phẩm

// newspage
import Domesticnews from '../components/Newspage/Domesticnews.vue'
import Guide from '../components/Newspage/Guide.vue'
import Internationalnews from '../components/Newspage/Internationalnews.vue'
import Promotionnews from '../components/Newspage/Promotionnews.vue'

// contact page
import Introduce from '../components/Contact/Introduce.vue'
import Contactstore from '../components/Contact/Contactstore.vue'
import Accountbank from '../components/Contact/Accountbank.vue'
import Buyingguide from '../components/Contact/Buyingguide.vue'
import Bankpolicy from '../components/Contact/Bankpolicy.vue'
import ProfileView from '../views/ProfileView.vue'
import Lookup from '../components/header/Lookup.vue'
import Abate from '../components/Abate/Abate.vue'
import CheckOrder from '../views/CheckOrderView.vue'
// Detail
import Returnpolicy from '../components/Detail/Returnpolicy.vue'
import Warrantypolicy from '../components/Detail/Warrantypolicy.vue'
import Salespolicy from '../components/Detail/Salespolicy.vue'
import Cuspolicy from '../components/Detail/Cuspolicy.vue'
import Accbank from '../components/Detail/Accbank.vue'
import Dealerpolicy from '../components/Detail/Dealerpolicy.vue'

import ProfileChangepasswordView from '../views/ProfileChangepasswordView.vue'
import ProfileEditView from '../views/ProfileEdit.vue'
import FavouriteView from '../views/FavouriteView.vue'
import ProfileOrder from '../views/ProfileOrder.vue'
import ErrorView from '../views/ErrorView.vue'
//sign in, sign up, forgot pass
import SignIn from '../views/SignInView.vue'
import SignUp from '../views/SignUpView.vue'
import Forgot from '../views/ForgotView.vue'
//payment
import Payment from '../components/payment/Payment.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/:name',
      name: 'search',
      component: Search
    },
    {
      path: '/:product',
      name: 'product',
      component: Product
    },
    {
      path: '/domesticnews',
      name: 'Domesticnews',
      component: Domesticnews
    },
    {
      path: '/guide',
      name: 'Guide',
      component: Guide
    },
    {
      path: '/internationalnews',
      name: 'Internationalnews',
      component: Internationalnews
    },
    {
      path: '/promotionnews',
      name: 'Promotionnews',
      component: Promotionnews
    },
    // contact
    {
      path: '/introduce',
      name: 'Introduce',
      component: Introduce
    },
    {
      path: '/contactstore',
      name: 'Contactstore',
      component: Contactstore
    },
    {
      path: '/accountbank',
      name: 'Accountbank',
      component: Accountbank
    },
    {
      path: '/buyingguide',
      name: 'Buyingguide',
      component: Buyingguide
    },
    {
      path: '/bankpolicy',
      name: 'Bankpolicy',
      component: Bankpolicy
    },
    {
      path: '/lookup',
      name: 'Lookup',
      component: Lookup
    },
    {
      path: '/abate',
      name: 'Abate',
      component: Abate
    },
    {
      path: '/order/checkoder/:code:email',
      name: 'CheckOrder',
      component: CheckOrder
    },
    {
      path: '/user/signin',
      name: 'signin',
      component: SignIn
    },
    {
      path: '/user/signup',
      name: 'signup',
      component: SignUp
    },
    {
      path: '/user/forgot',
      name: 'forgot',
      component: Forgot
    },
    {
      path: '/profile',
      name: '/profile',
      component: ProfileView
    },
    {
      path: '/profile/changepassword',
      name: 'Changepasssword',
      component: ProfileChangepasswordView
    },
    {
      path: '/profile/edit',
      name: 'Edit',
      component: ProfileEditView
    },
    {
      path: '/profile/favourite',
      name: 'Favourite',
      component: FavouriteView
    },
    {
      path: '/user/order',
      name: 'profileorder',
      component: ProfileOrder
    },
    {
      path: '/order/pay',
      name: 'payment',
      component: Payment
    },
    {
      path: '/*',
      name: 'Error',
      component: ErrorView
    },
    {
      path: '/returnpolicy',
      name: 'Returnpolicy',
      component: Returnpolicy
    },
    {
      path: '/dealerpolicy',
      name: 'Dealerpolicy',
      component: Dealerpolicy
    },
    {
      path: '/warrantypolicy',
      name: 'Warrantypolicy',
      component: Warrantypolicy
    },
    {
      path: '/salespolicy',
      name: 'Salespolicy',
      component: Salespolicy
    },
    {
      path: '/cuspolicy',
      name: 'Cuspolicy',
      component: Cuspolicy
    },
    {
      path: '/accbank',
      name: 'Accbank',
      component: Accbank
    }
  ]
})

export default router
