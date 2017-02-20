<template>
  <div class="channel-tab ">
    <div class="tab-section l-flex">
      <template v-for="item in tabs">
        <div class="tab" :class="{'selected': item === selected }" @click="select(item)">
          {{item | upper}} NEWS
        </div>
      </template>
    </div>
    <div class="content">
      <template v-for="item in tabs">
        <div class="news-list" v-show="item === selected">
          <NewsList :source="source" :sort="item"></NewsList>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import NewsList from './NewsList'

export default {
  name: 'ChannelTab',
  data () {
    return {
      selected: this.tabs[0]
    }
  },
  props: {
    tabs: {
      type: Array,
      required: true
    },
    source: {
      type: String,
      required: true
    }
  },
  components: {
    NewsList
  },
  methods: {
    select (name) {
      this.$data.selected = name
    }
  }
}
</script>

<style scoped>
  .channel-tab .tab-section {
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #ccc;
  }
  .channel-tab .tab {
    flex: 1;
    height: 0.8rem;
    line-height: 0.8rem;
    text-align: center;
    font-size: 14px;
  }
  .channel-tab .tab:nth-child(2) {
    border-left: 1px solid #ccc;
  }
  .channel-tab .tab.selected {
    color: #67cde2;
  }
  [data-dpr="2"] .channel-tab .tab {
    font-size: 28px;
  }
  [data-dpr="3"] .channel-tab .tab {
    font-size: 42px;
  }
</style>
