import Vue from 'vue'
import Router from 'vue-router'
import ForYou from 'components/Foryou'
import Explore from 'components/Explore'
import Channels from 'components/Channels'
import Setting from 'components/Setting'
import Source from 'components/Source'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ForYou',
      component: ForYou
    },
    {
      path: '/channels',
      name: 'Channels',
      component: Channels
    },
    {
      path: '/explore',
      name: 'Explore',
      component: Explore
    },
    {
      path: '/setting',
      name: 'Setting',
      component: Setting
    },
    {
      path: '/source',
      name: 'Source',
      component: Source
    },
  ]
})
