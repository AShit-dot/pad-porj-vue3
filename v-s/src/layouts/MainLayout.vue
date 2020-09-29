<template>
    <h2>{{curUserId}}</h2>
    <router-view/>
</template>


<script>
import {computed } from 'vue'
import {useRoute} from 'vue-router'
export default {
    setup() {
        const route = useRoute()

        const curUserId = computed(() => route.params.userId)

        return {
            curUserId
        }
    }
}
</script>