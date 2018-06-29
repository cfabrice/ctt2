<template>
  <div>
    <Navigation/>
     <section class="section main">
       <div class="container">
         <div class="columns is-centered is-multiline">
          <nuxt />
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
    components: {
      Navigation,
      Footer,
     // Hero
      },
    data() {
      return {

      }
    }
  }


</script>
