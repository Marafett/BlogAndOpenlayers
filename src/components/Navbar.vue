<template>
  <nav class="navbar navbar-light bg-light mb-3">
    <router-link class="navbar-brand" tag="a" to="/">
      <img
        src="@/assets/logo.png"
        width="30"
        height="30"
        class="d-inline-block align-top"
        alt=""
        loading="lazy"
      />
      <h1>Blog</h1>
    </router-link>
  </nav>
</template>

<style scoped lang="scss">
a {
  display: flex;
  align-items: baseline;
}
</style>
