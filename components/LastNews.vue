<template>
<section class="column">
   <!-- <div class="columns is-mobile">
        <div class="column">
            <h1 class="title">Actualités</h1>
        </div>
    </div> -->

           <div class="columns is-centered is-multiline">

          <Card-list v-for="post in filteredPosts" :post="post" :key="post._path"
           />

      </div>

        <!-- <div class="column">
            <ul>
                <li v-for="post in posts" :key="post.date">
                <nuxt-link :to="post._path">
                    {{ post.title }}
                </nuxt-link>
                </li>
            </ul>
        </div> -->

    </section>
</template>
<script>
import CardList from '@/components/CardList'
  export default {
    components: {
      CardList
    },
    data() {


      // Using webpacks context to gather all files from a folder
      const context = require.context('~/content/blog/posts/', false, /\.json$/);

      const posts = context.keys().map(key => ({
        ...context(key),
        _path: `/blog/${key.replace('.json', '').replace('./', '')}`
      }));

      return {
        posts:posts.reverse(),

      };

    },
    computed: {
      filteredPosts: function () {
        //return this.posts.slice(0, 2)
        return this.posts.slice(0, 2)
      }
    }
  }

</script>

<style>


</style>
