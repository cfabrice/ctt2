<template>
  <article class="column is-8-tablet">
    <h1 class="title is-1 has-text-centered">{{ title }}</h1>
    <div class="content">
      <div v-html="$md.render(body)"></div>

        <Formulaire/>
    </div>
  </article>
</template>

<script>
  import Formulaire from '@/components/Formulaire'

  export
  default {
    transition: 'page',
    components: {
      Formulaire,
    },
    head () {
    //let post = this.post
      return {
        title: this.title,
        meta: [
          { hid: 'description', name: 'description', content: this.body },
          { hid: 'keywords', name: 'keywords', content: 'Contact' }
        ]
      }
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

</style>
