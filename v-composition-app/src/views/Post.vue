<template>
    <div>
        <div class="post">
            <div class="post-tools">
                <button class="post-edit-button" @click="toggleAndSave"><i class="fas fa-edit"></i></button>
            </div>
            <div class="post-field" v-if="!compState.isEdit">
                <title class="post-title">{{curPost.title}}</title>
                <p class="post-descr">{{curPost.body}}</p>
            </div>
            <div class="post-field" v-else>
                <span class="post-edit-item">
                    Title: 
                    <input type="text" class="post-edit-title" placeholder="Edit your text" v-model="curPost.title">
                </span>
                <span class="post-edit-item">
                    Describe:
                    <textarea cols="30" rows="10" class="post-edit-descr" v-model="curPost.body"></textarea>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive} from 'vue'
import {useRoute} from 'vue-router'
import {useStore} from 'vuex'
export default {
    setup() {
        const route = useRoute()
        const store = useStore()
        // onMounted(async () => {
        //     await store.dispatch('setPosts')
        // })
        const postId = route.params.postId
        store.commit('SET_CUR_POST', {postId})
        const curPost = store.getters.getPost
        const compState = reactive({
            isEdit: false
        })

        function toggleAndSave() {
            compState.isEdit = !compState.isEdit

            const {title, body} = curPost

            if(compState.isEdit === false) {
                store.commit('EDIT_CUR_POST', {postId, title, body})
            }
        }
        
        return {
            route,
            curPost,
            toggleAndSave,
            compState
        }
    }
}
</script>

<style lang="scss">
.post {
    padding:  0 20%;
    &-field {
        padding: 20px 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    &-tools {
            position: absolute;
            width: 64px;
            height: 100%;
            padding: 20px 0;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            background-color: #000;
            right: 0;
            border-left: 5px solid #d4d4d4;
    }
    &-title {
        font-size: 35px;
            font-weight: 100;
            text-decoration: none;
            color: #000;
    }
    &-descr {
        margin-top: 10px;
        font-weight: 100;
        font-size: 20px;
    }
    &-edit {
        &-item {
            display: flex;
            justify-content: space-between;
            margin-top: 20px;
            font-size: 35px;
            font-weight: 100;
            text-decoration: none;
            color: #000;
            width: 100%
        }
        &-title {
            margin-left: 20px;
            font-size: 35px;
            font-weight: 100;
            text-decoration: none;
            color: #000;
            width: 90%
        }
        &-descr {
            margin-left: 20px;
            width: 85%;
            margin-top: 10px;
            font-weight: 100;
            font-size: 20px;
            resize: none;
        }
        &-button {
            width: 30px;
            height: 30px;
            background-color: #fff;
            border-radius: 8px;
            border: 2px solid #d4d4d4;
            transition: 0.3s all;
            outline: none;
            &:hover {
                background-color: #f2f0f0;
            }
        }
    }
}
</style>

