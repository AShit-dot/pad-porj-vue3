export default {
    state: {
        posts: [],
        curPost: null
    },
    mutations: {
        SET_POSTS(state, posts) {
            state.posts = posts
        },
        setCurPost(state, postId) {
            state.curPost = state.posts.filter(post => post.id === postId)
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
            return state.posts
        },
        getCurPost (state) {
            return state.curPost
        }
    }
}