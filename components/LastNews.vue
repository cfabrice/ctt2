<template>
  <ul>
    <li v-for="post in filteredPosts" :key="post.date">
      <nuxt-link :to="post._path">
        {{ post.title }}
      </nuxt-link>
    </li>

  </ul>
</template>
<script>
  export default {
    data() {
      // Using webpacks context to gather all files from a folder
      const context = require.context('~/content/actus/', false, /\.json$/);

      const posts = context.keys().map(key => ({
        ...context(key),
        _path: `/actus/${key.replace('.json', '').replace('./', '')}`
      }));

      return {
        posts
      };
    },
    computed: {
      filteredPosts: function () {
        return this.posts.slice(0, 2)
      }
    }
  }

</script>

<style>


</style>
