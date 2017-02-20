<template>
  <nav class="nav l-flex">
    <div class="item" :class="{'active': curNav === 'ForYou'}" @click="jump('ForYou')">
      <p><i class="iconfont">&#xe643;</i></p>
      <p>For You</p>
    </div>
    <div class="item" :class="{'active': curNav === 'Channels'}" @click="jump('Channels')">
      <p><i class="iconfont">&#xe608;</i></p>
      <p>Channels</p>
    </div>
    <div class="item" :class="{'active': curNav === 'Explore'}" @click="jump('Explore')">
      <p><i class="iconfont">&#xe614;</i></p>
      <p>Explore</p>
    </div>
    <div class="item" :class="{'active': curNav === 'Setting'}" @click="jump('Setting')">
      <p><i class="iconfont">&#xe600;</i></p>
      <p>Setting</p>
    </div>
  </div>
</template>

<script>
import router from '../router'

export default {
  name: 'NewsNav',
  data () {
    return {
      curNav: 'ForYou'
    }
  },
  watch: {
    '$route': 'updateActive'
  },
  methods: {
    updateActive (route) {
      this.$data.curNav = route.name
    },
    jump (nav) {
      switch (nav) {
        case 'Channels':
          router.push({ name: 'Channels'})
          break
        case 'ForYou':
          router.push({ name: 'ForYou'})
          break
        case 'Explore':
          router.push({ name: 'Explore'})
          break
        case 'Setting':
          router.push({ name: 'Setting'})
          break
      }
    }
  }
}
</script>

<style scoped>
  .nav {
    width: 10rem;
    height: 1.2rem;
    position: fixed;
    bottom: 0;
    left: 0;
    background: rgba(255, 255, 255, 0.9);
    border-top: 1px solid #ccc;
    align-items: center;
    overflow: hidden;
    user-select: none;
    color: #757373;
  }
  .nav .item {
    flex: 1;
    text-align: center;
    transition: color 0.5s;
  }
  .nav .item.active {
    color: #3ca3c7;
  }
</style>
