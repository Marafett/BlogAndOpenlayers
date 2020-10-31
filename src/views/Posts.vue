<template>
  <div>
    <div class="search">
      <input
        type="search"
        class="form-control mb-3"
        v-model="search"
        placeholder="search by author"
      />
    </div>
    <div v-if="searchPost.length">
      <ul class="list-group">
        <li class="list-group-item" v-for="post of searchPost" :key="post.id">
          <span>
            <router-link tag="a" :to="'/post/' + post.id"
              >{{ post.title }}
            </router-link>
          </span>
          <span>
            <small
              >(Author:
              <router-link tag="a" :to="'/author/' + post.author.username"
                >{{ post.author.username }})</router-link
              >
            </small>
          </span>
        </li>
      </ul>
    </div>
    <div class="no-posts" v-else>No posts</div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Posts",
  data: () => ({
    search: "",
  }),
  computed: {
    ...mapState(["posts"]),
    // filter posts by author
    searchPost() {
      return this.posts.filter((post) => {
        return post.author.username
          .toLowerCase()
          .includes(this.search.toLowerCase());
      });
    },
  },
};
</script>

<style scoped lang="scss">
.list-group-item:hover {
  background: rgba(0, 0, 0, 0.08);
}
a {
  color: #212529;
}
.search {
  display: flex;
  justify-content: center;
}
input {
  max-width: 600px;
}
.no-posts {
  text-align: center;
}
</style>
