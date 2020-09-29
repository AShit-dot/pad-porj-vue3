export default {
    state: {
        todos: []
    },
    mutations: {
        SET_TODOS(state, todos) {
            state.todos = todos
        }
    },
    actions: {
        async setTodos({commit}) {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts')
            const resJson = await res.json()
            commit('SET_POSTS', resJson)
        } 
    },
    getters: {
        getTodos(state) {
            return state.todos
        }
    }
}