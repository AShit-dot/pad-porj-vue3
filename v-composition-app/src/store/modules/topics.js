export default {
    state: {
        topics: [
            {title: 'Todos', link: '/todos'},
            {title: 'Posts', link: '/posts'}   
        ]
    },
    getters: {
        getTopics(state) {
            return state.topics
        }
    }
}