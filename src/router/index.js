import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/Homepage'
import About from '@/components/About'
import Portfolio from '@/components/Portfolio'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/',
      name: 'Blog',
      component: Homepage
    }
  ]
})
