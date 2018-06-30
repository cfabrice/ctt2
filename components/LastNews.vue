<template>
  <section class="section">
    <!-- <div class="columns is-mobile">
        <div class="column">
            <h1 class="title">Actualités</h1>
        </div>
    </div> -->

    <div class="columns is-centered is-multiline">


      <div v-for="post in filteredPosts" :post="post" :key="post._path" class="column is-6-tablet  ">
        <div class="card ">
          <div class="card-image">
            <figure class="image ">
              <img v-if="post.thumbnail" :src="post.thumbnail" :alt="post.title">
            </figure>
          </div>
          <div class="card-content has-text-centered">
            <p class="title is-4  ">
              <nuxt-link class="" :to="post._path"> {{ post.title }} </nuxt-link>
            </p>
            <div class="content ">
              <p class="has-text-centered">
                <b-icon icon="calendar" size="is-small" type="is-primary" /> {{ post.date }}
              </p>
              <div class="" v-html="$md.render(post.body).slice(0, 150)+'...'"></div>
            </div>
          </div>
        </div>
      </div>

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
      const context = require.context('~/content/actus/', false, /\.json$/);

      const posts = context.keys().map(key => ({
        ...context(key),
        _path: `/actus/${key.replace('.json', '').replace('./', '')}`
      }));

      return {
        posts: posts.reverse(),

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
