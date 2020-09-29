<template>
  <div id="app">
    <List :users="users"/>
  </div>
</template>

<script>
import List from './components/List'
export default {
  name: 'App',
  components: {
    List
  },
  data() {
    return {
      users: [
        {nickname: 'horse forse'},
        {nickname: 'jumaisinba'},
        {nickname: 'pocoritell243'}
      ]
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
