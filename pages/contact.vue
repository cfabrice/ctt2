<template>
  <article class="column is-8-tablet">
    <!-- <img v-bind:src="thumbnail" v-bind:alt="title"/> -->
    <h1 class="title is-1 has-text-centered">{{ title }}</h1>
    <div class="content">
      <!-- <p>{{ body }}</p> -->
      <div v-html="$md.render(body)"></div>
      <Form/>

    </div>
  </article>
</template>

<script>
  import Form from '@/components/Form'

  export
  default {
    transition: 'page',
    components: {
      Form,
    },
    async asyncData({
      params
    }) {
      // const postPromise = process.BROWSER_BUILD
      //   ? import('~/content/blog/posts/' + params.slug + '.json')
      //   : Promise.resolve(
      //       require('~/content/blog/posts/' + params.slug + '.json')
      //     );

      let post = await
      import ('~/content/contact.json');
      return post;
    }
  };

</script>
<style media="screen">




  /* form {
    display: flex;
    flex-direction: column;
  }

  [type="submit"] {
    margin-top: 3rem;
  } */

</style>
