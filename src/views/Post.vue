<template>
  <div>
    <div class="card">
      <h5 class="card-header">Post: {{ post.id }}</h5>
      <div class="card-body">
        <h5 class="card-title">{{ post.title }}</h5>
        <p class="card-text">
          {{ post.body }}
        </p>
        Author:
        <router-link tag="a" :to="'/author/' + post.author.username">{{
          post.author.username
        }}</router-link>
      </div>
    </div>
    <p class="card-text mt-3">Comments:</p>
    <CommentsPost :comments="post.comments"/>
  </div>
</template>

<script>
import { mapState } from "vuex";
import CommentsPost from "../components/CommentsPost"
export default {
  name: "Post",
  components: {CommentsPost},
  computed: {
    ...mapState(["posts"]),
    // getting a post by route
    post() {
      return this.posts.find((post) => post.id === +this.$route.params.id);
    }
  },
};
</script>