export default {
    state: {
        todos: []
    },
    mutations: {
        SET_POSTS(state, todos) {
            state.todos = todos
        }
    },
    actions: {
        async setPosts({commit}) {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts')
            const resJson = await res.json()
            commit('SET_POSTS', resJson)
        } 
    },
    getters: {
        getPosts(state) {
            return state.todos
        }
    }
}