<template>
  <article class="column is-8-tablet">
    <img v-bind:src="thumbnail" v-bind:alt="title"/>

      <h1 class="title is-1 has-text-centered">{{ title }}</h1>

      <div class="content">

           <p class="has-text-centered">
                  <b-icon icon="calendar" size="is-small" type="is-primary" /> {{ date }}
                </p>

        <div v-html="$md.render(body)"></div>
      </div>
  </article>
</template>

<script>
export default {
    //transition: 'page',
  async asyncData({ params }) {
    // const postPromise = process.BROWSER_BUILD
    //   ? import('~/content/blog/posts/' + params.slug + '.json')
    //   : Promise.resolve(
    //       require('~/content/blog/posts/' + params.slug + '.json')
    //     );

   let post = await import('~/content/actus/posts/' + params.slug + '.json');
    return post;
  },
  head () {
    //let post = this.post
      return {
        title: this.title,
        meta: [
          { hid: 'description', name: 'description', content: this.body },
          { hid: 'keywords', name: 'keywords', content: 'Actus CTT' }
        ]
      }
    }
};
</script>
<style media="screen">

</style>
