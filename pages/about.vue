<template>
  <article>

    <!-- <img v-bind:src="thumbnail" v-bind:alt="title"/> -->


  <div class="container">
   <h1 class="title is-1">{{ title }}</h1>


    <div class="content">
         <!-- <p>{{ body }}</p> -->

     <div v-html="$md.render(body)"></div>

    </div>
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

   let post = await import('~/content/s/about.json');
    return post;
  }
};
</script>

