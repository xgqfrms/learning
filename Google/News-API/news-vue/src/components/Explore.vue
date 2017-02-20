<template>
  <div class="explore">
    <template v-if="loaded">
      <h1>Hot</h1>
      <HotNews :item="recommend"></HotNews>
      <h1>Recommend</h1>
      <div class="recommend-news l-flex g-show-container" :class="{'g-show': loaded}">
        <template v-for="item in others">
          <HotNewsCard :item="item"></HotNewsCard>
        </template>
      </div>
    </template>
  </div>
</template>

<script>
import axios from 'axios'
import HotNews from './HotNews'
import HotNewsCard from './HotNewsCard'

export default {
  name: 'Explore',
  data () {
    return {
      loaded: false,
      recommend: {},
      others: []
    }
  },
  components: {
    HotNews,
    HotNewsCard
  },
  beforeRouteEnter  (to, from, next) {
    document.title = 'Explore'
    next()
  },
  methods: {
    fetchData () {
      eventBus.$emit('show-loading')
      axios.get(SETTING.ExploreAPI)
      .then(function (response) {
        if (response.data && response.data.code === 1) {
          this.$data.loaded = true
          this.$data.recommend = response.data.data[0]
          response.data.data.shift()
          this.$data.others = response.data.data
        } else {
          alert('Sorry We Have Some Error, Please Reload This Page')
          console.error(response.data)
        }
        eventBus.$emit('close-loading')
      }.bind(this))
      .catch(function (error) {
        eventBus.$emit('close-loading')
        alert('Sorry We Have Some Error, Please Reload This Page')
        console.error(error)
      })
    }
  },
  created () {
    this.fetchData()
  }
}
</script>

<style scoped>
  .explore h1 {
    font-size: 30px;
    width: 9.2rem;
    padding: 0.266667rem 0.4rem 0 0.4rem;
    color: #3cc791;
    font-weight: bold;
  }
  [data-dpr="2"] .explore h1 {
    font-size: 60px;
  }
  [data-dpr="3"] .explore h1 {
    font-size: 90px;
  }
  .recommend-news {
    align-content: center;
    justify-content: space-around;
    flex-wrap: wrap;
  }
</style>
