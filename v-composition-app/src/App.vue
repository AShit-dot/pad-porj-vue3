<template>
  <component :is="layout">
    <router-view/>
  </component>
</template>

<script>
import MainLayout from './layouts/MainLayout'
import {computed} from 'vue'
import { useRoute } from 'vue-router'

export default {
  name: 'App',
  components: {
    MainLayout
  },
  setup() {
    const route = useRoute()
    const layout = computed(() => route.meta.layout + '-layout')

    return {
      route, 
      layout
    }
  }
}
</script>

<style lang="scss">
* {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
} 

title {
  display: block;
}

p {
  display: block;
}



::-webkit-scrollbar {
  width: 15px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
</style>


