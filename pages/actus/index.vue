<template>
  <section class="section">
    <div class="columns is-mobile">
        <div class="column">
            <h1 class="title">Actualités</h1>
        </div>
    </div>
    <div class="columns is-multiline is-mobile">
        <div v-for="post in posts" :key="post.title" class="column is-one-third ">
          <div class="card">
            <header class="card-header">
              <p class="card-header-title has-text-grey">
               <nuxt-link :to="post._path"> {{ post.title }} </nuxt-link>              </p>
            </header>
            <div class="card-content">
              <div class="content has-text-centered">
                <b-icon :icon="calendar" size="is-large" type="is-primary" />     {{ post.date }}

                <div v-html="$md.render(post.body)"></div>
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
