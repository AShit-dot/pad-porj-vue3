import {createStore} from 'vuex'
import todos from './modules/todos'
import topics from './modules/topics'
import posts from './modules/posts'

export default createStore({
    modules: {
        posts,
        topics,
        todos
    },
})