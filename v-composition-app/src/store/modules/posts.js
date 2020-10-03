export default {
    state: {
        posts: [],
        curPost: null,
        isLoaded: false
    },
    mutations: {
        SET_POSTS(state, posts) {
            state.posts = posts
        },
        SET_CUR_POST (state, {postId}) {
            state.curPost = state.posts.filter(post => post.id.toString() === postId)[0]
        },
        EDIT_CUR_POST(state, {postId, title, body}) {
            state.posts[postId] = {title, body}
        },
        SET_ISLOADED(state, {isLoaded}) {
            state.isLoaded = isLoaded
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
        getPost(state) {
            return state.curPost
        },
        getInfoAboutPosts(state) {
            return state.isLoaded
        }
    }
}