<template>

    <div  class="column is-6-tablet is-4-desktop is-3-widescreen ">
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

    <!-- <div v-else class= "column is-6-tablet is-4-desktop is-3-widescreen " >
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
    </div> -->


</template>
<script>
  //
  //console.log(window.location.pathname);

  export default {
    name: 'CardList',
    data() {
      return {
        //look: '',
      }
    },
    props: {

      post: {
        type: Object,
        default: function () {
          return {}
        }
      },




    },
  }

</script>

<style>


</style>
