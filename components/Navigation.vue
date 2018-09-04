<template>

    <nav class="navbar header has-shadow is-primary is-fixed-top" role="navigation" aria-label="main navigation" >
      <div class="navbar-brand">
        <nuxt-link class="navbar-item" to="/">
          <img src="~assets/img/logo.svg" alt="Buefy" height="38">
        </nuxt-link>

        <div class="navbar-burger" data-target="navMenu" @click="showNav = !showNav" v-bind:class="{ 'is-active' : showNav }">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navMenu" class="navbar-menu" v-bind:class="{ 'is-active' : showNav }">
        <!-- <div class="navbar-start">

             <nuxt-link class="navbar-item" v-for="link in menu"  :to="link.href" v-bind:class="{ 'is-active': isActive(link) }" :key="link.title">{{link.title}}</nuxt-link>



        </div> -->

        <div class="navbar-end">
          <!-- <div class="navbar-item">
            <div class="field is-grouped">
              <p class="control">
                <a class="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="http://localhost:4000"
                  target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=http://localhost:4000&amp;via=jgthms">
                  <span class="icon">
                    <b-icon icon="twitter" />
                  </span>
                  <span>
                    Tweet
                  </span>
                </a>
              </p>
              <p class="control">
                <a class="button is-primary" href="https://github.com/jgthms/bulma/releases/download/0.7.1/bulma-0.7.1.zip">
                  <span class="icon">
                    <b-icon icon="download" />
                  </span>
                  <span>Download</span>
                </a>
              </p>
            </div>
          </div>
        </div> -->
         <nuxt-link class="navbar-item" v-for="link in menu"  :to="link.href" v-bind:class="{ 'is-active': isActive(link) }" :key="link.title">{{link.title}}</nuxt-link>

      </div>
</div>

    </nav>

</template>

<script>

  export default {

    data() {
      return {
        showNav: false,
       menu: [
        { href: '/', title: 'Accueil' },
        { href: '/club', title: 'Club' },
         {href: '/comite', title: 'Comité'},
        //{ href: '/inspire', title: 'Inspire' },
        { href: '/cours', title: 'Cours' },
        {href: '/cotisations', title: 'Cotisations'},
        { href: '/actus', title: 'Actualités' },
         {href: '/calendrier-competitions', title: 'Calendrier'},
        { href: '/contact', title: 'Contact' },
      ],
      }
    },
    methods: {
    isActive(link) {
      return this.$route.fullPath === link.href;
    },
    // closenav: {
    //   $('.navbar-start').collapse('hide');
    // }
  },
  watch: {
    '$route' () {
      this.showNav = false
    }
  }
  }


</script>
<style>

</style>
