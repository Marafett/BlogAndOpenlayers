<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ authorPost.name }}</h5>
      <p class="card-text">Email: {{ authorPost.email }}</p>
      <p class="card-text">Address: {{ authorPost.address.city }}</p>
      <p class="card-text">Phone: {{ authorPost.phone }}</p>
    </div>
    <MapAuthor
      :lat="authorPost.address.geo.lat"
      :lng="authorPost.address.geo.lng"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import MapAuthor from "../components/MapAuthor";
export default {
  name: "Author",
  components: { MapAuthor },
  data: () => ({
    authorPost: null,
  }),
  computed: {
    ...mapState(["posts"]),
    //getting a post with the author by route
    author() {
      return this.posts.find(
        (post) => post.author.username === this.$route.params.name
      );
    },
  },
  created() {
    // getting author
    this.authorPost = this.author.author;
  },
};
</script>

<style scoped lang="scss">
.map {
  height: 400px;
  width: 100%;
}
</style>
