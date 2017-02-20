<template>
  <div class="news g-show-container" :class="{'g-show': loaded}">
    <template v-for="item in list">
      <NewsItem :item="item" v-if="listView === 'A'"></NewsItem>
      <NewsItemCard :item="item" v-else></NewsItemCard>
    </template>
    <NewsListAction news-name="list"></NewsListAction>
  </div>
</template>

<script>
import NewsItem from './NewsItem'
import NewsItemCard from './NewsItemCard'
import NewsListAction from './NewsListAction'
import axios from 'axios'

export default {
  name: 'NewsList',
  data () {
    return {
      loaded: false,
      list: {},
      id: '',
      listView: window.ListView ? window.ListView : 'A'
    }
  },
  props: {
    source: {
      type: String,
      required: true
    },
    sort: {
      type: String,
      required: true
    }
  },
  components: {
    NewsItem,
    NewsItemCard,
    NewsListAction
  },
  methods: {
    noticeSource (id) {
      eventBus.$emit('loaded-news', id)
    },
    fetchNews () {
      eventBus.$emit('show-loading')
      axios.get(SETTING.NewsAPI, {
        params: {
          source: this.source,
          sortBy: this.sort,
        }
      })
      .then(function (response) {
        if (response !== undefined && response.data.code === 1) {
          this.$data.list = response.data.data.content
          this.$data.id = response.data.data.objectId
          this.$data.loaded = true
          this.$data.isFetching = false
          this.noticeSource(this.$data.id)
        } else {
          alert('Sorry We Have Some Error, Please Reload This Page')
          console.error(response.data)
        }
        eventBus.$emit('close-loading')
      }.bind(this))
      .catch(function (error) {
        eventBus.$emit('close-loading')
        alert('Sorry We Have Some Error, Please Reload This Page')
        console.error(error)
      })
    }
  },
  created () {
    this.fetchNews()
    eventBus.$on('reload-cur-news', function (name) {
      if (name === 'list') {
        this.fetchNews()
      }
    }.bind(this))
    eventBus.$on('change-news-view', function () {
      if (this.$data.listView === 'A') {
        this.$data.listView = 'B'
      } else {
        this.$data.listView = 'A'
      }
    }.bind(this))
  }
}
</script>
