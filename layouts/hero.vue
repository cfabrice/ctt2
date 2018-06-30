<template>
  <div>
    <Navigation/>
    <Hero/>
    <div class="container">



          <nuxt />



    </div>
    <Footer/>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
  export default {
   // transition:"layout",

    components: {
      Navigation,
      Footer,
      Hero
      },
    data() {
      return {

      }
    }
  }


</script>
