<template>
  <li class="item l-flex">
    <span class="key">{{item.name}}</span>
    <span class="value" @click="remove"><i class="iconfont">&#xe612;</i>Delete</span>
  </li>
</template>

<script>
export default {
  name: 'SubscribedSetting',
  props: {
    item: {
      type: Object,
      required: true
    },
    list: {
      type: Array,
      required: true
    }
  },
  computed: {
    subscribedIndex () {
      return this.list.indexOf(this.item.id)
    },
  },
  methods: {
    remove () {
      window.SubscribedList.splice(this.subscribedIndex, 1)
      window.SubscribedName.splice(this.subscribedIndex, 1)
      window.localStorage.setItem(window.SETTING.AppName, JSON.stringify(window.SubscribedList))
      window.localStorage.setItem(window.SETTING.AppName + '_name', JSON.stringify(window.SubscribedName))
    }
  }
}
</script>

<style scoped>
  .item {
    margin: 0.2rem auto;
    padding: 0.133333rem 0;
    border-bottom: 1px solid rgba(171,171,171,0.7);
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    color: #8c8c8c;
  }
  .item .iconfont {
    margin-right: 0.133333rem;
  }
  [data-dpr="2"] .item {
    font-size: 32px;
  }
  [data-dpr="3"] .item {
    font-size: 48px;
  }
</style>
