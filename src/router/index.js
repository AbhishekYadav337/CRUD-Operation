import Vue from 'vue'
import VueRouter from 'vue-router'
import userlist from '../views/userlist';

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    component: userlist
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;
