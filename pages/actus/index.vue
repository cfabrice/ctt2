<template>
  <section class="section">
    <div class="columns is-mobile">
        <div class="column">
            <h1 class="title">Actualités</h1>
        </div>
    </div>
    <div class="columns is-multiline is-mobile">
        <div v-for="post in displayedPosts" :key="post._path" class="column is-one-third ">
          <div class="card">
            <header class="card-header">
              <p class="card-header-title has-text-grey">
               <nuxt-link :to="post._path"> {{ post.title | capitalize}} </nuxt-link>              </p>
            </header>
            <div class="card-content">
              <div class="content has-text-centered">
                <b-icon icon="calendar" size="is-small" type="is-primary" />     {{ post.date | formatDate}}

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
    <div class="columns  is-mobile">
        <nav class="pagination is-small" role="navigation" aria-label="pagination">
          <a class="pagination-previous" v-if="page != 1" @click="page--">Page précédente</a>
          <!-- <a class="pagination-link" v-for="pageNumber in pages.slice(page-1, page+5)" :key="pageNumber"  @click="page = pageNumber">1</a> -->
          <a class="pagination-next"  @click="page++" v-if="page < total">Page suivante</a>
        </nav>
      </div>

  </section>
</template>

<script>



  export default {
    components: {

    },
    directives: {
    },
    data() {
      // Using webpacks context to gather all files from a folder
      const context = require.context('~/content/actus/', false, /\.json$/);

      const posts = context.keys().map(key => ({
        ...context(key),
        _path: `/actus/${key.replace('.json', '').replace('./', '')}`
      }));
        // const page = '';
        // const perPage = '';
         //const pages = [];
      return {

        posts,

        page: 1,
        perPage: 1,
        pages:[]

      };
    },
    methods: {

      setPages () {
        console.log(Math.ceil(this.posts.length / this.perPage));
        let numberOfPages = Math.ceil(this.posts.length / this.perPage);
        for (let index = 1; index <= numberOfPages; index++) {
          this.pages.push(index);
        }
      },
      paginate (posts) {
        console.log(Math.ceil(this.posts.length / this.perPage));
        let page = this.page;
        let perPage = this.perPage;
        let from = (page * perPage) - perPage;
        let to = (page * perPage);
        return  posts.slice(from, to);
      }

  },
  // created () {
  //   this.getPosts();
  // },
  // not working !!
  watch: {
    posts () {
      this.setPages();
    }
  },
  computed: {
    displayedPosts () {
      return this.paginate(this.posts);
    },
    total () {

      let total = Math.ceil(this.posts.length / this.perPage);
      return total;
    }
  },


  }

</script>
