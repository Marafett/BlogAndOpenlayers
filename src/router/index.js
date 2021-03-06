import Vue from "vue";
import VueRouter from "vue-router";
import Posts from "../views/Posts.vue";
import Post from "../views/Post.vue";
import Author from "../views/Author.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Posts",
    component: Posts,
  },
  {
    path: "/post/:id",
    name: "Post",
    component: Post,
  },
  {
    path: "/author/:name",
    name: "Author",
    component: Author,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
