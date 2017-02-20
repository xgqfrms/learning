<template>
  <div class="news-item" @click="jumpToUrl">
    <img :src="item.urlToImage" class="pic">
    <h2 class="title-font title l-m-ellipsis">{{ item.title }}</h2>
    <p class="info"><time> {{ time }}</time></p>
  </div>
</template>

<script>
export default {
  name: 'NewsItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    time () {
      const postTime = new Date(this.item.publishedAt)
      return postTime.toLocaleDateString() + ' ' + postTime.toLocaleTimeString()
    }
  },
  methods: {
    jumpToUrl () {
      window.location.href = this.item.url;
    }
  }
}
</script>

<style scoped>
  .news-item {
    width: 100%;
    height: 5.5rem;
    background: #f7f7f7;
    margin-bottom: 0.04rem;
    overflow: hidden;
    position: relative;
  }
  .news-item .pic {
    width: 10rem;
    height: 5.5rem;
  }
  .news-item .info {
    color: #fff;
    position: absolute;
    display: block;
    left: 0;
    padding-left: 0.2rem;
    bottom: 0.2rem;
  }
  .news-item .title {
    -webkit-line-clamp: 3;
    position: absolute;
    left: 0;
    bottom: 0.85rem;
    width: 8.5rem;
    padding: 0.1rem 0 0.1rem 0.2rem;
    font-size: 24px;
    line-height: 1.15;
    color: #fff;
    background: rgba(37, 37, 37, 0.55);
  }
  [data-dpr="2"] .news-item .title {
    font-size: 48px;
  }
  [data-dpr="3"] .news-item .title {
    font-size: 72px;
  }
</style>
