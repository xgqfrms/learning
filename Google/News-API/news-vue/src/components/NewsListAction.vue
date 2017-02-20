<template>
  <div class="news-list-action">
    <p @click="handleReload"><i class="iconfont big">&#xe664;</i></p>
    <p @click="handleChangeNewsView"><i class="iconfont big">&#xe624;</i></p>
  </div>
</template>

<script>
export default {
  name: 'NewsListAction',
  props: {
    newsName: {
      type: String
    }
  },
  methods: {
    handleReload () {
      eventBus.$emit('reload-cur-news', this.newsName)
    },
    handleChangeNewsView () {
      eventBus.$emit('change-news-view')
    }
  }
}
</script>

<style scoped>
  .news-list-action {
    position: fixed;
    right: 0.3rem;
    bottom: 2.0rem;
    width: 1.066667rem;
    text-align: center;
  }
  .news-list-action p {
    line-height: 100%;
    padding: 0.333333rem 0;
    color: #fff;
    margin-bottom: 0.266667rem;
    background: rgba(0,0,0,0.3);
  }
</style>
