import {createStore} from 'vuex'
import user from './modules/user'
import navbar from './modules/navbar'

export default createStore({
    modules: {
        user,
        navbar
    },
})