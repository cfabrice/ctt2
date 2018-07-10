<template>
  <div>
    <section class="column ">
      <div class="columns is-centered is-multiline">
        <div class="column is-10-tablet">
          <!-- <h3 class="title is-3 has-text-centered">Un petit titre</h3> -->
          <p class="has-text-centered accroche">
            Créé en 1978, le CTT Puplinge compte une trentaine de membres, enfants, jeunes et moins jeunes. Pusieurs équipes participent aux différentes compétitions cantonales et nationales.
Et plusieurs cours et plusieurs lieux sont à disposition pour s’entraîner. </p>
        </div>
      </div>
    </section>
    <section class=" main">
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
    transition: 'page',

    layout: 'hero',
    name: 'HomePage',
    components: {
      //BLogo
      LastNews
    },
    data() {
      return {

      }
    },
     head () {
    return {
      title: 'Accueil',
      meta: [
        { hid: 'description', name: 'description', content: 'Bienvenue sur le site du CTT Puplinge' }
      ]
    }
  }
  }

</script>
