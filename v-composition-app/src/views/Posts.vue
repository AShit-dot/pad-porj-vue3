<template>
    <ul>
        <li v-for="post in posts" :key="post.id">
            <h2>user id: {{post.userId}}</h2>
            <h3>{{post.title}}</h3>
            <p>{{post.body}}</p>
        </li>
    </ul>
</template>

<script>
import {useStore} from 'vuex'
import { onMounted, computed } from 'vue'
export default {
    setup() {
        
        const store = useStore()

        onMounted(async () => {
            await store.dispatch('setPosts')
        })

        const posts = computed(() => store.getters.getPosts)

        return {
            posts
        }
    }
}
</script>