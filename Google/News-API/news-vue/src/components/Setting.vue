<template>
  <div class="setting">
    <h1>Setting</h1>
    <div class="card">
      <h2>Manage Subscribe List</h2>
      <template v-if="subscribedList.length > 0">
        <template v-for="item in subscribed">
          <SubscribedSetting :item="item" :list="subscribedList"></SubscribedSetting>
        </template>
      </template>
      <template v-else>
        <p class="desc">No Subscribed News, <router-link :to="{ name: 'Channels'}">Subscribe Now !</router-link></p>
      </template>
      </li>
    </div>
    <div class="card">
      <h2>Default News List View</h2>
      <div class="view-list l-flex">
        <div class="view" @click="changeView('A')">
          <img src="../assets/a.png" :class="{'selected': listViewSetting === 'A'}">
          <p v-if="listViewSetting === 'A'">Now</p>
        </div>
        <div class="view" @click="changeView('B')">
          <img src="../assets/b.png" :class="{'selected': listViewSetting === 'B'}">
          <p v-if="listViewSetting === 'B'">Now</p>
        </div>
      </div>
    </div>
    <div class="card">
      <h2>About</h2>
      <p class="desc">
        News Source: <a href="https://newsapi.org/">News API</a>.<br/>
        All News Updated Every 30 Mins. <br/>
        Project Source: <a href="https://github.com/A-limon/news-vue">Github</a>.
      </p>
    </div>
  </div>
</template>

<script>
import SubscribedSetting from './SubscribedSetting'

export default {
  name: 'Setting',
  data () {
    return {
      subscribedList: window.SubscribedList,
      subscribedName: window.SubscribedName,
      listView: window.ListView
    }
  },
  computed: {
    listViewSetting () {
      if (this.$data.listView.length === 0) {
        return 'A'
      } else {
        return this.$data.listView
      }
    },
    subscribed () {
      if (this.$data.subscribedList.length === 0) {
        return []
      } else {
        const res = []
        this.$data.subscribedList.forEach(function (item, index) {
          const list = {}
          list.name = this.$data.subscribedName[index]
          list.id = item
          res.push(list)
        }.bind(this))
        return res
      }
    }
  },
  components: {
    SubscribedSetting
  },
  beforeRouteEnter  (to, from, next) {
    document.title = 'Setting'
    next()
  },
  methods: {
    changeView (name) {
      this.$data.listView = name
      window.ListView = name
      window.localStorage.setItem(window.SETTING.AppName + '_view', JSON.stringify(window.ListView))
    }
  }
}
</script>

<style scoped>
  .setting {
    width: 10rem;
  }
  .setting h1 {
    font-size: 30px;
    width: 9.2rem;
    padding: 0.266667rem 0.4rem 0 0.4rem;
    color: #ff9217;
    font-weight: bold;
  }
  [data-dpr="2"] .setting h1 {
    font-size: 60px;
  }
  [data-dpr="3"] .setting h1 {
    font-size: 90px;
  }
  .setting .card {
    width: 9.2rem;
    padding: 0.266667rem 0.4rem 0.266667rem 0.4rem;
  }
  .setting .card h2 {
    font-size: 20px;
    color: #8c8c8c;
    font-weight: bold;
  }
  [data-dpr="2"] .setting .card h2 {
    font-size: 40px;
  }
  [data-dpr="3"] .setting .card h2 {
    font-size: 60px;
  }
  .setting .desc {
    color: #8c8c8c;
    margin: 0.266667rem 0;
  }
  .setting .desc a {
    color: #ff9217;
  }
  .view-list {
    justify-content: space-between;
    align-content: center;
  }
  .view-list .view {
    width: 4.0rem;
    margin: 0.266667rem 0;
    text-align: center;
  }
  .view-list .view img {
    display: block;
    width: 100%;
    border: 5px solid #fff;
    transition: border 0.5s;
  }
  .view-list .view img.selected {
    border: 5px solid #ff9217;
  }
  .view-list .view p {
    color: #8c8c8c;
    margin-top: 0.133333rem;
  }
</style>