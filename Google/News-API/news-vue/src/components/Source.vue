<template>
  <div class="source">
    <div class="source-info l-flex">
      <div class="logo l-flex" @click="toHomePage">
        <div><img :src="item.urlsToLogos.medium"/></div>
      </div>
      <div class="desc">
        <h2 class="title l-m-ellipsis">{{item.name}}</h2>
        <p class="info l-m-ellipsis">{{item.description}}</p>
        <div class="sub button l-flex" @click="subscribe" v-if="showSubButton">
          <template v-if="hasSubscribed">
            <i class="iconfont">&#xe604;</i>
            <span>Subscribed</span>
          </template>
          <template v-else>
            <i class="iconfont">&#xe671;</i>
            <span>Subscribe</span>
          </template>
        </div>
      </div>
    </div>
    <ChannelTab :tabs="item.sortBysAvailable" :source="item.channel_id"></ChannelTab>
  </div>
</template>

<script>
import router from '../router'
import ChannelTab from './ChannelTab'

export default {
  name: 'Source',
  data () {
    return {
      loadedNews: [],
      item: {},
      subscribedList: window.SubscribedList,
      subscribedName: window.SubscribedName
    }
  },
  computed: {
    subscribeId () {
      if (this.$data.loadedNews.length > 1) {
        return this.$data.loadedNews[1]
      } else {
        return this.$data.loadedNews[0]
      }
    },
    showSubButton () {
      return window.NotSupportedLs ? false : true
    },
    subscribedIndex () {
      if (!this.showSubButton) {
        return -1
      } else {
        return this.$data.subscribedList.indexOf(this.subscribeId)
      }
    },
    hasSubscribed () {
      if (!this.showSubButton) {
        return false
      } else {
        if (this.subscribedIndex === -1) {
          return false
        } else {
          return true
        }
      }
    }
  },
  components: {
    ChannelTab
  },
  beforeRouteEnter  (to, from, next) {
    if (to.params.name === undefined) {
      router.push({ name: 'Channels'})
    } else {
      document.title = to.params.name
      next()
    }
  },
  methods: {
    toHomePage () {
      window.location.herf = this.$data.item.url
    },
    subscribe () {
      if (!this.hasSubscribed) {
        window.SubscribedList.push(this.subscribeId)
        window.SubscribedName.push(this.item.name)
      } else {
        window.SubscribedList.splice(this.subscribedIndex, 1)
        window.SubscribedName.splice(this.subscribedIndex, 1)
      }
      window.localStorage.setItem(window.SETTING.AppName, JSON.stringify(window.SubscribedList))
      window.localStorage.setItem(window.SETTING.AppName + '_name', JSON.stringify(window.SubscribedName))
    }
  },
  created () {
    this.$data.item = this.$route.params
    eventBus.$on('loaded-news', function (id) {
      if (this.$data.loadedNews.indexOf(id) === -1) {
        this.$data.loadedNews.push(id)
      }
    }.bind(this))
  }
}
</script>

<style scoped>
  .source-info {
    padding: 0.333333rem 0.2rem;
    width: 9.6rem;
    align-items: top;
    border-bottom: 1px solid #ccc;
  }
  .source-info .logo {
    flex: 1;
    width: 3.106667rem;
    height: 3.106667rem;
    border: 1px solid rgba(171,171,171,0.3);
    margin-right: 0.266667rem;
    align-items: center;
  }
  .source-info .logo img {
    display: block;
    width: 3.106667rem;
  }
  .source-info .desc {
    flex: 2;
    position: relative;
  }
  .source-info .info {
    -webkit-line-clamp: 3;
    color: rgba(171,171,171,1);
  }
  .source-info .title {
    -webkit-line-clamp: 1;
    font-size: 24px;
    margin-bottom: 0.1rem;
  }
  [data-dpr="2"] .source-info .title {
    font-size: 48px;
  }
  [data-dpr="3"] .source-info .title {
    font-size: 72px;
  }
  .source-info .button {
    position: absolute;
    bottom: 0;
    background: #67cde2;
    border-radius: 0.2rem;
    color: #fff;
    padding: 0.066667rem 0.333333rem;
    align-items: center;
    justify-content: center;
    font-size: 16px;
  }
  .source-info .button .iconfont {
    margin-right: 0.2rem;
    font-size: 16px;
  }
  .source-info .sub {
    left: 0;
  }
  [data-dpr="2"] .source-info .button,
  [data-dpr="2"] .source-info .button .iconfont {
    font-size: 32px;
  }
  [data-dpr="3"] .source-info .button,
  [data-dpr="3"] .source-info .button .iconfont {
    font-size: 48px;
  }
</style>
