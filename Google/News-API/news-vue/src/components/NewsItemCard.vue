<template>
  <div class="news-item-card " @click="jumpToUrl">
    <h2 class="title-font title l-m-ellipsis">{{ item.title }}</h2>
    <div class="l-flex">
      <div class="pic">
        <img :src="item.urlToImage">
      </div>
      <div class="content l-m-ellipsis">
        <p>{{ item.description }}</p>
      </div>
    </div>
    <p class="time"><time> {{ time }}</time></p>
  </div>
</template>

<script>
export default {
  name: 'NewsItemCard',
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
  .news-item-card {
    margin: 0 auto;
    padding: 0.3rem;
    background: #fff;
    overflow: hidden;
    position: relative;
    border-bottom: 1px solid #ccc;
  }
  .news-item-card .pic {
    flex: 1;
  }
  .news-item-card .pic img {
    width: 90%;
    display: block;
  }
  .news-item-card .content {
    flex: 2;
    color: #636262;
    -webkit-line-clamp: 5;
  }
  .news-item-card .title {
    font-size: 22px;
    line-height: 1.1;
    margin-bottom: 0.2rem;
    -webkit-line-clamp: 2;
  }
  [data-dpr="2"] .news-item-card .title {
    font-size: 44px;
  }
  [data-dpr="3"] .news-item-card .title {
    font-size: 66px;
  }
  .news-item-card .time {
    margin-top: 0.066667rem;
    text-align: right;
    color: #636262;
  }
</style>
