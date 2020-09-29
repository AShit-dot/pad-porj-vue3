<template>
    <ul>
        <li v-for="todo in todos" :key="todo.id">{{todo.task}}</li>
    </ul>
</template>

<script>
import {useStore} from 'vuex'
import { onMounted, computed } from 'vue'
export default {
    setup() {
        
        const store = useStore()

        onMounted(async () => {
            await store.dispatch('setTodos')
        })

        const users = computed(() => store.getters.getTodos)
        console.log(users)

        return {
            users
        }
    }
}
</script>