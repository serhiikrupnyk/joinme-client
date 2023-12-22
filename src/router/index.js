import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUp from '../views/SignUp.vue'
import SignIn from '../views/SignIn.vue'
import store from '../store'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignIn
    },
    {
      path: '/',
      name: 'home',
      meta: {layout: 'main', auth: true},
      component: HomeView
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  if (localStorage.getItem('token')) {
    await store.dispatch('checkAuth');
  }
  
  const isAuth = store.getters['isAuth'];
  const requiredAuth = to.matched.some(record => record.meta.auth);

  if (requiredAuth && !isAuth) {
    next('/signin');
  } else {
    next();
  }
});

export default router
