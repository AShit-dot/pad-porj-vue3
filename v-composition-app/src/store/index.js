import {createStore} from 'vuex'
import todos from './modules/todos'
import posts from './modules/posts'
import sidebar from './modules/sidebar'
import aboutme from './modules/aboutme'

export default createStore({
    modules: {
        posts,
        todos,
        sidebar,
        aboutme
    },
})