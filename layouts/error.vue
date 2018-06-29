<template>
  <div>
    <Navigation/>
    <section class="section main">
      <div class="container">
        <div class="columns is-centered">
          <div class="container column is-8-tablet">

            <h1 v-if="error.statusCode === 404">Page not found</h1>
            <h1 v-else>An error occurred</h1>
            <nuxt-link to="/">Home page</nuxt-link>

          </div>
        </div>
      </div>

    </section>
    <Footer/>
  </div>
</template>

<script>
  import Navigation from '@/components/Navigation'
  import Footer from '@/components/Footer'
  //import Hero from '@/components/Hero'
  export default {
    // transition: 'page',
    props: ['error'],
    components: {
      Navigation,
      Footer
    },
    data() {
      return {
      }
    }
  }

</script>
