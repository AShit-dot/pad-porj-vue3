<template>
    <nav class="navbar">
        <ul class="navbar-wrapper">
            <li class="navbar-item" v-for="topic in topics" :key="topic">{{topic}}</li>
        </ul>
    </nav>    
</template>

<script>
import {useStore} from 'vuex'

export default {
    setup() {
        const store = useStore()

        const topics = store.getters.getTopics
        console.log(topics)

        return {
            topics
        }
    }
}
</script>

<style lang="scss">
.navbar {
    width: 100%;
    height: 100px;    
    background-color: #f3f5eb;
    padding: 25px 60px;
    &-wrapper{
        display: flex;
        justify-content: flex-start;
        align-items: center; 
    }
    &-item {
        padding: 10px;
        min-width: 8%;
        text-align: center;
        list-style: none;
        border: 3px solid #cfe35b;
        background-color: #eaf5a4;
        transition: 0.4s all;
        border-radius: 8px;
        margin-left: 10px;
        color: #869e28;
        font-size: 20px;
        font-weight: 100;
        &:first-child{
            margin-left: 0;
        }
        &:hover {
            background-color: #f3f5e6;
        }
    }
}
</style>