<template>
    <div class="post">
        <title>{{route.params.postId}}</title>
    </div>
</template>

<script>
import {useRoute} from 'vue-router'
export default {
    setup() {
        const route = useRoute()

        return {
            route
        }
    }
}
</script>