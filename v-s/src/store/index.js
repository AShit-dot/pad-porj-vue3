// import {provide, inject, reactive} from 'vue'

// export const stateSymbol = Symbol('state')
// export const createState = reactive({counter: 0})

// export const useState = () => inject(stateSymbol)
// export const provideState = () => provide(
//     stateSymbol,
//     createState
// )

import {createStore} from 'vuex'

export default createStore({
    state: {
        user: null
    },
    mutations: {
        SET_USER(state, user) {
            state.user = user
        }
    },
    actions: {
        setUser({commit}, user) {
            commit('SET_USER', user)
        }
    },

    getters: {
        getUser(state) {
            return state.user
        }
    },
    modules: {}
})