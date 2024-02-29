import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard } from '@bcwdev/auth0provider-client'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage')
  },
  {
    path: '/about',
    name: 'About',
    component: loadPage('AboutPage')
  },
  {
    path: '/account',
    name: 'Account',
    component: loadPage('AccountPage'),
    beforeEnter: authGuard
  },
  {
    path: '/books',
    name: 'Books',
    component: loadPage('BookPage')
  },
  {
    path: '/journeys',
    name: 'Journeys',
    component: loadPage('JourneyPage')
  },
  {
    path: '/extras',
    name: 'Extras',
    component: loadPage('ExtrasPage')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: loadPage('BlogPage')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: loadPage('ContactPage')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: loadPage('AdminPage')
  }
]

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})
