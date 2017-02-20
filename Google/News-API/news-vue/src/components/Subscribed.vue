<template>
  <div class="subscribed">
    <h2 class="subscribed-title title-font">{{item.name}}</h2>
    <template v-for="news in item.list">
      <NewsItem :item="news" v-if="listView === 'A'"></NewsItem>
      <NewsItemCard :item="news" v-else></NewsItemCard>
    </template>
    <NewsListAction news-name="foryou"></NewsListAction>
  </div>
</template>

<script>
import NewsItem from './NewsItem'
import NewsItemCard from './NewsItemCard'
import NewsListAction from './NewsListAction'

export default {
  name: 'Subscribed',
  data () {
    return {
      listView: window.ListView ? window.ListView : 'A'
    }
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  components: {
    NewsItem,
    NewsItemCard,
    NewsListAction
  },
  created () {
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

<style scoped>
  .subscribed {
    width: 9.4rem;
    padding: 0.266667rem 0.3rem;
  }
  .subscribed-title {
    margin-bottom: 0.2rem;
    font-size: 13px;
    color: #6f6f6f;
    margin-left: 0.133333rem
  }
  [data-dpr="2"] .subscribed-title {
    font-size: 26px;
  }
  [data-dpr="3"] .subscribed-title {
    font-size: 39px;
  }
</style>
