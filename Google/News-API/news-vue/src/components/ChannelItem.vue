<template>
  <div class="channel-item" @click="jumpToNews">
    <div class="l-flex content">
      <div>
        <img :src="item.urlsToLogos.medium" class="logo">
      </div>
    </div>
    <p class="name">{{item.name}}</p>
  </div>
</template>

<script>
import router from '../router'

export default {
  name: 'ChannelItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    jumpToNews () {
      router.push({ name: 'Source', params: this.item})
    }
  }
}
</script>
<style scoped>
  .channel-item {
    width: 2.666667rem;
    height: 2.666667rem;
    margin: 0.4rem auto 1rem auto;
    position: relative;
    border: 1px solid rgba(171,171,171,0.3);
  }
  .channel-item .content {
    width: 2.666667rem;
    height: 2.666667rem;
    align-items: center;
    overflow: hidden;
  }
  .channel-item .logo {
    display: block;
    width: 100%;
    margin: 0 auto;
  }
  .channel-item .name {
    margin-top: 0.2rem;
    text-align: center;
    color: rgba(171,171,171,1);
  }
  .channel-item .option {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(27,27,27,0.7);
    top: 0;
  }
</style>
