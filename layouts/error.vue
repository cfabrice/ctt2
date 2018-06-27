<template>
  <div>
    <Navigation/>

    <!-- <Hero/> -->


     <section class="main-content columns">

      <!-- <aside class="column is-2 section">
        <p class="menu-label is-hidden-touch">General</p>
        <ul class="menu-list">
          <li v-for="(item, key) of items" :key="key">
            <nuxt-link :to="item.to" exact-active-class="is-active">
              <b-icon :icon="item.icon" /> {{ item.title }}
            </nuxt-link>
          </li>
        </ul>
      </aside> -->

      <div class="container column is-10">

    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <nuxt-link to="/">Home page</nuxt-link>

      </div>


    </section>



    <Footer/>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
  export default {
   // transition: 'page',
     props: ['error'],
    components: {
      Navigation,
      Footer,
      Hero
      },
    data() {
      return {

        items: [{
            title: 'Home',
            icon: 'home',
            to: {
              name: 'index'
            }
          },
          {
            title: 'Inspire',
            icon: 'lightbulb',
            to: {
              name: 'inspire'
            }
          }
        ]
      }
    }
  }


</script>
