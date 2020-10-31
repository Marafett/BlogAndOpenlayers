<template>
  <ul class="list-group">
    <li class="list-group-item" v-for="com of comments" :key="com.id">
      <h5 class="card-text">{{ com.name }}</h5>
      <p class="card-text">{{ com.body }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    comments: Array
  }
};
</script>
