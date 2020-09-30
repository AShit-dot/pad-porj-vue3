export default {
    state: {
        topics: [
            {title:'About me', link: '/about_me'},
            {title: 'Posts', link: '/posts'}
        ]
    },
    mutations: {},
    actions: {},
    getters: {
        getTopics(state) {
            return state.topics
        }
    }
}