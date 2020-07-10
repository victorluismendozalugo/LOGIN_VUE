import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginComponent from "../views/login.vue"
import SecureComponent from "../views/secure.vue"
import Home from "../views/Home.vue"
import About from "../views/About.vue"

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: {
        name: "login"
      }
    },
    {
      path: "/login",
      name: "login",
      component: LoginComponent
    },
    {
      path: "/secure",
      name: "secure",
      component: SecureComponent
    },
    {
      path: "/Home",
      name: "Home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    }
  ]
})