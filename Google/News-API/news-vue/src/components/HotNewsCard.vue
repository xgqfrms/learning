<template>
  <div class="hot-news-card">
    <img :src="news.urlToImage" class="pic">
    <p class="channel">{{channelName}}</p>
    <h2 class="title title-font l-m-ellipsis" @click="jump">{{news.title}}</h2>
    <p class="time"><time>{{time}}</time></p>
  </div>
</template>

<script>
export default {
  name: 'HotNewsCard',
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
    channelName () {
      return this.item.channel.name
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
  .hot-news-card {
    width: 4.2rem;
    padding: 0.266667rem 0.4rem;
  }
  .hot-news-card .pic {
    display: block;
    width: 100%;
    max-height: 2.36rem;
    border-radius: 0.2rem;
  }
  .hot-news-card .channel {
    display: block;
    margin-top: 0.2rem;
  }
  .hot-news-card .time {
    color: #636262;
    font-size: 12px;
    margin-top: 0.133333rem;
  }
  [data-dpr="2"] .hot-news-card .time {
    font-size: 22px;
  }
  [data-dpr="3"] .hot-news-card .time {
    font-size: 36px;
  }
  .hot-news-card .title {
    margin-top: 0.266667rem;
    font-size: 18px;
    -webkit-line-clamp: 3;
  }
  [data-dpr="2"] .hot-news-card .title {
    font-size: 36px;
  }
  [data-dpr="3"] .hot-news-card .title {
    font-size: 54px;
  }
</style>
