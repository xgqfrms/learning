// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

window.SETTING = {
  Title: 'Headline News',
  AppName: 'HeadlineNewsTest',
  NewsAPI: 'https://newsapi.leanapp.cn/news',
  ChannelsAPI: 'https://newsapi.leanapp.cn/channels',
  ExploreAPI: 'https://newsapi.leanapp.cn/explore/',
}

const helper = {
  isSupportedLs: function () {
    let supported = false
    const storage = window.localStorage
    if (storage && storage.setItem ) {
      supported = true
      const key = '__' + Math.round(Math.random() * 1e7)
      try {
        storage.setItem(key, key)
        storage.removeItem(key)
      } catch (err) {
        supported = false
      }
    }
    return supported
  }
}

if (helper.isSupportedLs()) {
  const list = localStorage.getItem(window.SETTING.AppName)
  const listName = localStorage.getItem(window.SETTING.AppName + '_name')
  const listView = localStorage.getItem(window.SETTING.AppName + '_view')
  window.SubscribedList = list ? JSON.parse(list) : []
  window.SubscribedName = listName ? JSON.parse(listName) : []
  window.ListView = listView ? JSON.parse(listView) : ''
} else {
  window.NotSupportedLs = true
}

/* eslint-disable no-new */
window.eventBus = new Vue()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

Vue.filter('upper', function (value) {
  return value.toUpperCase()
})
