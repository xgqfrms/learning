<template>
  <div class="loading l-flex g-show-container" :class="{'g-show': show}"> 
    <i class="iconfont">&#xe626;</i>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  data () {
    return {
      show: false
    }
  },
  created () {
    eventBus.$on('show-loading', function () {
      this.$data.show = true
    }.bind(this))
    eventBus.$on('close-loading', function () {
      this.$data.show = false
    }.bind(this))
  },
}
</script>

<style scoped>
  .loading {
    position: fixed;
    align-items: center;
    justify-content: center;
    margin: auto;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 1.333333rem;
    height: 1.333333rem;
    z-index: 100;
    text-align: center;
  }
  .loading .iconfont {
    font-size: 40px;
    color: #3ca3c7;
    animation: loading 2s infinite;
  }
  @keyframes loading {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  [data-dpr="2"] .loading .iconfont {
    font-size: 80px;
  }
  [data-dpr="3"] .loading .iconfont {
    font-size: 120px;
  }
</style>
