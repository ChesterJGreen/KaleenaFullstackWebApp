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
    path: '/extras',
    name: 'Extras',
    component: loadPage('ExtrasPage')
  },
  {
    path: '/extras/mssp',
    name: 'MSSP',
    component: loadPage('MSSPPage'),
    children: [
      { path: 'qr18wh', name: 'QR18WH', component: loadPage('QR18WHPage') },
      { path: 'qr3c', name: 'QR3C', component: loadPage('QR3CPage') },
      { path: '/qr21fy', component: loadPage('QR21FYPage') },
      { path: '/qr19a', component: loadPage('QR19APage') },
      { path: '/qr10pip', component: loadPage('QR10PIPPage') },
      { path: '/qr11th', component: loadPage('QR11THPage') },
      { path: '/qr12d', component: loadPage('QR12DPage') },
      { path: '/qr2gh', component: loadPage('QR2GHPage') }
    ]
  },
  {
    path: '/landing-page',
    name: 'Landing Page',
    component: loadPage('LandingPage')
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
