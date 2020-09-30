<template>
<Sidebar/>
    <router-view/>
</template>

<script>
import Sidebar from '@/components/Sidebar'
export default {
    components: {
        Sidebar
    }
}
</script>
