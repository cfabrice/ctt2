<template>
  <article class="column is-8-tablet">
    <!-- <img v-bind:src="thumbnail" v-bind:alt="title"/> -->
    <h1 class="title is-1 has-text-centered">{{ title }}</h1>
    <div class="content">
      <!-- <p>{{ body }}</p> -->
      <div v-html="$md.render(body)"></div>


    </div>
  </article>
</template>

<script>


  export
  default {
    transition: 'page',
    components: {

    },
    async asyncData({
      params
    }) {

      let post = await
      import ('~/content/les-cours.json');
      return post;
    }
  };

</script>
<style media="screen">

</style>
