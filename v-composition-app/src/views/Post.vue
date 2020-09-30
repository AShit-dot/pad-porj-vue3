<template>
    <div class="post">
        <title>{{curPost.id}}</title>
    </div>
</template>

<script>
import { onMounted } from 'vue'
import {useRoute} from 'vue-router'
import {useStore} from 'vuex'
export default {
    setup() {
        const route = useRoute()
        const store = useStore()
        console.log( route.params.postId)
        onMounted(() => store.commit('setCurPost', route.params.postId))
        const curPost = store.getters.getCurPost
        console.log(curPost)
        return {
            route, 
            curPost
        }
    }
}
</script>