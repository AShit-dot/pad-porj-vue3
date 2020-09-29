<template>
    <ul>
        <li v-for="user in users" :key="user.id">{{user.name}}</li>
    </ul>
</template>

<script>
import {useStore} from 'vuex'
import { onMounted, computed } from 'vue'
export default {
    setup() {
        
        const store = useStore()

        onMounted(async () => {
            await store.dispatch('setUsers')
        })

        const users = computed(() => store.getters.getUsers)
        console.log(users)

        return {
            users
        }
    }
}
</script>