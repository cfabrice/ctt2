<template>
  <div>
    <div class="column ">
      <h1 class="title is-1 has-text-centered">Actualités</h1>
    </div>
    <section class="section">
      <div class="columns is-multiline">

          <Card-list v-for="post in displayedPosts" :post="post" :key="post._path" />

      </div>
    </section>

    <section class="section">
      <div class="columns  is-mobile">
        <nav class="pagination is-small" role="navigation" aria-label="pagination">
          <a class="pagination-previous" v-if="page != 1" @click="page--; selected--">Page précédente</a>
          <ul class="pagination-list">
            <li v-if="page != 1" v-for="index in total" :key="index" @click="page = index">
              <a class="pagination-link" @click="selected = index" :class="{ 'is-current': index == selected }">{{index}}</a>
            </li>
          </ul>
          <a class="pagination-next" @click="page++; selected++ " v-if="page < total">Page suivante</a>
        </nav>
      </div>
    </section>
  </div>
</template>

<script>
  import CardList from '@/components/CardList'
  export default {
    components: {
      CardList
    },

    directives: {},
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
        selected: 1,
        index: 1,
        posts: posts.reverse(),

        page: 1,
        perPage: 9,
        pages: []

      };
    },
    methods: {
      // myFilter: function(){
      //       this.isActive = !this.isActive;
      //     // some code to filter users
      //   },

      setPages() {

        let numberOfPages = Math.ceil(this.posts.length / this.perPage);
        for (let index = 1; index <= numberOfPages; index++) {
          this.pages.push(index);
        }
      },
      paginate(posts) {
        //console.log(Math.ceil(this.posts.length / this.perPage));
        let page = this.page;
        let perPage = this.perPage;
        let from = (page * perPage) - perPage;
        let to = (page * perPage);
        return posts.slice(from, to);
      }

    },
    // created () {
    //   this.getPosts();
    // },
    // not working !!
    // watch: {
    //   posts () {
    //     this.setPages();
    //   }
    // },
    computed: {
      displayedPosts() {
        return this.paginate(this.posts);
      },
      total() {
        let total = Math.ceil(this.posts.length / this.perPage);
        return total;
      }

    },


  }

</script>
