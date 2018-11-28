import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'
import Home from './views/Home.vue'

Vue.use(Router)
Vue.use(Meta)

// scrollBehavior:
// - only available in html5 history mode
// - defaults to no scroll behavior
// - return false to prevent scroll
const scrollBehavior = (to, from, savedPosition) => {
  if (!savedPosition && (to.query.modal || from.query.modal)) {
    return false
  }
  if (to.hash) {
    return {
      selector: to.hash,
      // , offset: { x: 0, y: 10 }
    }
  }
  if (savedPosition) {
    return savedPosition
  }
  return {
    x: 0,
    y: 0,
  }
}

export default new Router({
  mode: 'history',
  scrollBehavior,
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/advisors',
      name: 'advisors',
      component: () => import(/* webpackChunkName: "Advisors" */ './views/Advisors.vue'),
    },
    {
      path: '/team-and-partners',
      name: 'team-and-partners',
      component: () => import(/* webpackChunkName: "TeamAndPartners" */ './views/TeamAndPartners.vue'),
    },
    {
      path: '/vision',
      name: 'vision',
      component: () => import(/* webpackChunkName: "VisionPage" */ './views/VisionPage.vue'),
    },
    {
      path: '/imigize-apps',
      name: 'imigize-apps',
      component: () => import(/* webpackChunkName: "ImigizeApps" */ './views/ImigizeApps.vue'),
    },
    {
      path: '/imigize-token',
      name: 'imigize-token',
      component: () => import(/* webpackChunkName: "ImigizeToken" */ './views/ImigizeToken.vue'),
    },
    {
      path: '/news',
      name: 'news',
      component: () => import(/* webpackChunkName: "News" */ './views/News.vue'),
    },
    {
      path: '*',
      name: 'pageNotFound',
      component: () => import(/* webpackChunkName: "PageNotFound" */ './views/PageNotFound.vue'),
    },
  ],
})
