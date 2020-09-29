export default {
    state: {
        users: [],

    },
    mutations: {
        SET_USERS(state, users) {
            state.users = users
        }
    },
    actions: {
        async setUsers({commit}) {
            const res = await fetch('https://jsonplaceholder.typicode.com/users')
            const resJson = await res.json()
            commit('SET_USERS', resJson)
        } 
    },
    getters: {
        getUsers(state) {
            return state.users
        }
    }
}