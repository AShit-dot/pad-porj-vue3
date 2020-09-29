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
        async setUsers({commit}) {
            const res = await fetch('https://jsonplaceholder.typicode.com/todos')
            const resJson = await res.json()
            commit('SET_TODOS', resJson)
        } 
    },
    getters: {
        getUsers(state) {
            return state.todos
        }
    }
}