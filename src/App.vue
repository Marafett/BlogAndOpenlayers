<template>
  <div id="app" class="container">
    <Navbar />
    <div class="loading" v-if="load">
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <p>загрузка...</p>
    </div>
    <div v-else><router-view></router-view></div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Navbar from "./components/Navbar";
export default {
  components: { Navbar },
  data: () => ({
    load: true,
  }),
  async mounted() {
    await this.getPosts();
    await this.getAuthors();
    await this.getComments();
    this.load = false;
  },
  methods: {
    ...mapActions(["getPosts", "getAuthors", "getComments"]),
  },
};
</script>

<style lang="scss">
.loading {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
