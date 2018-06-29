<template>
  <div>
    <section class="section">
      <div class="columns is-centered is-multiline">
        <div class="column is-10-tablet">
          <!-- <h3 class="title is-3 has-text-centered">Un petit titre</h3> -->
          <p class="has-text-centered accroche">
            Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cum sociis natoque penatibus et magnis
            dis parturient montes, nascetur ridiculus mus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Praesent commodo cursus magna, vel scelerisque
            nisl consectetur et. Curabitur blandit tempus porttitor.Donec sed odio dui. Donec ullamcorper nulla non metus
            auctor fringilla. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi
            leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante venenatis dapibus posuere
            velit aliquet. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor.</p>
        </div>
      </div>
    </section>
    <section>
      <div class="columns is-multiline is-centered">
        <div class="column is-10-tablet">
          <h3 class="title is-3 has-text-centered">Dernières nouvelles</h3>
          <LastNews/>
        </div>
      </div>

    </section>
    <!-- <section class="section">
      <div class="columns is-mobile">
        <div v-for="(feature, i) of features" :key="i" class="column">
          <div class="card">
            <header class="card-header">
              <p class="card-header-title has-text-grey">
                {{ feature.title }}
              </p>
            </header>
            <div class="card-content">
              <div class="content has-text-centered">
                <b-icon :icon="feature.icon" size="is-large" type="is-primary" />
              </div>
            </div>
            <footer class="card-footer">
              <div class="card-footer-item" v-html="feature.content"></div>
            </footer>
          </div>
        </div>
      </div>
    </section> -->
  </div>
</template>

<script>
  //import BLogo from '@/components/Logo'
  import LastNews from '@/components/LastNews'

  export default {

    layout: 'hero',
    name: 'HomePage',
    components: {
      //BLogo
      LastNews
    },
    data() {
      return {
        // features: [{
        //     icon: 'github-circle',
        //     title: 'Free',
        //     content: `<span>Open source on <a href="https://github.com/buefy/buefy"> GitHub</a></span>`
        //   },
        //   {
        //     icon: 'cellphone-link',
        //     title: 'Responsive',
        //     content: `<span><b class="has-text-grey">Every</b> component is responsive</span>`
        //   },
        //   {
        //     icon: 'alert-decagram',
        //     title: 'Modern',
        //     content: `<span>Built with <a href="https://vuejs.org/">Vue.js</a> and <a href="http://bulma.io/">Bulma</a></span>`
        //   },
        //   {
        //     icon: 'arrange-bring-to-front',
        //     title: 'Lightweight',
        //     content: `<span>No other internal dependency</span>`
        //   }
        // ]
      }
    }
  }

</script>
