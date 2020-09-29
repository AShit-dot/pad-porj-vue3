<template> 
  <component :is="layout">
    <router-view/>
  </component>
</template>

<script>
import { reactive, computed } from 'vue'
import { useRoute } from 'vue-router'
import MainLayout from './layouts/MainLayout'
import {useStore} from 'vuex'
export default {
  name: 'App',
  components: {
    MainLayout
  },
  setup() {
    const route = useRoute()
    const store = useStore()
    const layout = computed(() => route.meta.layout + '-layout')

    store.dispatch('setUser', 'main user')

    const user = store.getters.getUser


    console.log(`${user} `)

    const state = reactive({header: 0})

    function changeHeader(data) {
      state.header = data
    }

    return {
      changeHeader,
      state,
      layout
    }
  },
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
