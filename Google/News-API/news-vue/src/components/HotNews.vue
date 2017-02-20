<template>
  <div class="hot-news">
    <img :src="news.urlToImage" class="pic">
    <img :src="channelPic" class="channel" v-if="channelPic">
    <h2 class="title title-font" @click="jump">{{news.title}}</h2>
    <p class="time"><time>{{time}}</time></p>
  </div>
</template>

<script>
export default {
  name: 'HotNews',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    news () {
      return this.item.news.content[0]
    },
    channelPic () {
      return this.item.channel ? this.item.channel.urlsToLogos.small : ''
    },
    time () {
      const postTime = new Date(this.news.publishedAt)
      return postTime.toLocaleDateString() + ' ' + postTime.toLocaleTimeString()
    }
  },
  methods: {
    jump () {
      window.location.href = this.news.url
    }
  }
}
</script>

<style scoped>
  .hot-news {
    width: 9.2rem;
    padding: 0.266667rem 0.4rem;
  }
  .hot-news .pic {
    display: block;
    width: 100%;
    max-height: 6.813333rem;
    border-radius: 0.2rem;
  }
  .hot-news .channel {
    display: block;
    width: 1.333333rem;
    margin-top: 0.266667rem;
  }
  .hot-news .time {
    color: #636262;
    font-size: 12px;
    margin-top: 0.133333rem;
  }
  [data-dpr="2"] .hot-news .time {
    font-size: 22px;
  }
  [data-dpr="3"] .hot-news .time {
    font-size: 36px;
  }
  .hot-news .title {
    margin-top: 0.266667rem;
    font-size: 24px;
  }
  [data-dpr="2"] .hot-news .title {
    font-size: 48px;
  }
  [data-dpr="3"] .hot-news .title {
    font-size: 72px;
  }
</style>
