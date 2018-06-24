<template>
  <section class="section">
    <div class="columns is-mobile">
      <h2>Blog</h2>
      <ul>
        <li v-for="post in posts" :key="post.date">
          <nuxt-link :to="post._path">
            {{ post.title }}
          </nuxt-link>
        </li>

      </ul>
    </div>
  </section>
</template>

<script>
  export default {
    components: {
      //AppLogo,
      //'b-modal': bModal
    },
    directives: {
      //  'b-modal': bModalDirective
    },
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
    }
  }

</script>
