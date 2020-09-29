<template>
    <ul>
        <li :key="user.nickname" v-for="user in users">{{user.nickname | validate}}</li>
    </ul>
</template>

<script>
export default {
    props: {
        users: {
            type: Array,
            required: false,
            defaoult: () => []
        }
    },
    data() {
        return {
            title: 'Header'
        }
    },
    filters: {
        toUpper(value) {
            return value.toUpperCase()
        }
    }
}
</script>