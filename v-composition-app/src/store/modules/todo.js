export default {
    state: {
        todo: [
            'Goals in procent',
            'Tasks'
        ]
    },
    getters: {
        getTopics(state) {
            return state.topics
        }
    }
}