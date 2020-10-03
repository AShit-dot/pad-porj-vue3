<template>
    <div class="posts-field">
        <ul class="posts">
            <title class="posts-header">Posts</title>
            <li class="posts" v-for="post in posts" :key="post.id">
                <router-link tag="h3" class="posts-title" :to="{ name: 'Post', params: { postId: post.id }}">{{post.title}}</router-link>
                <!-- there construction needs to filter -->
                <p class="posts-descr">{{post.body}}</p> 
            </li>
        </ul>
    </div>
</template>

<script>
import {useStore} from 'vuex'
import { onMounted, computed } from 'vue'
export default {
    setup() {
        
        const store = useStore()
        let isLoaded = store.getters.getInfoAboutPosts

        if(!isLoaded) {
            console.log(isLoaded)
            isLoaded = !isLoaded
            onMounted(async () => {
                await store.dispatch('setPosts')
                store.commit('SET_ISLOADED', {isLoaded})
            })
        }
        

        const posts = computed(() => store.getters.getPosts)
        
        return {
            posts
        }
    }
}
</script>

<style lang="scss">
    .posts {
        background-color: rgba(0,0,0,0.05);
        display: flex;
        flex-direction: column;
            justify-content: center;
            align-items: center;
        &-field {
            padding: 0 5%;
        }
    }
    .posts {
        width: 90%;
        background-color: #fff;
        list-style-type: none;
        margin-top: 70px;
        padding: 10px;
        border: 3px solid #e8e9eb;
        border-radius: 4px;
        &-title {
            font-size: 35px;
            font-weight: 100;
            text-decoration: none;
            color: #000;
            &:hover {
                 text-decoration: underline;
            }
        }
        &-header {
            margin-top: 20px;
            display: block;
            font-size: 40px;
            font-weight: 100;
        }
        &-descr {
            margin-top: 10px;
            font-weight: 100;
            font-size: 20px;
        }   
    }
</style>