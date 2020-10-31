import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: []
  },
  mutations: {
    // create an additional parameter for comments
    getPosts(state, posts) {
      state.posts = posts;
      state.posts.map(post => {
        post.comments = []
      })
    },
    // join comments to posts
    getComments(state, comments) {
      state.posts.map(post => {
        comments.forEach(comment => {
          if (post.id === comment.postId) {
            post.comments.push(comment)
          }
        })
      })
    },
    // join authors to posts
    getAuthors(state, authors) {
      state.posts.map(post => {
        authors.forEach(user => {
          if (post.userId === user.id) {
            post.author = user
          }
        });
      })
    },
  },
  actions: {
    // getting posts from api
    async getPosts({ commit }) {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=15");
      const posts = await res.json();
      commit("getPosts", posts);
    },
    // getting comments from api
    async getComments({ commit }) {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/comments?_limit=100");
      const comments = await res.json();
      commit("getComments", comments);
    },
    // getting authors from api
    async getAuthors({ commit }) {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const authors = await res.json();
      commit("getAuthors", authors);
    },
  },
});
