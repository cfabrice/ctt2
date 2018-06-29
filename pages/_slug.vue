<template>
  <article class="column is-8-tablet">
    <!-- <img v-bind:src="thumbnail" v-bind:alt="title"/> -->
      <h1 class="title is-1 has-text-centered">{{ title }}</h1>
      <div class="content">
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

   let post = await import('~/content/' + params.slug + '.json');
    return post;
  }
};
</script>
<style media="screen">
  img {
    max-width: 300px;
  }

</style>
