<template>
  <div>
    <section class="column ">
      <div class="columns is-centered is-multiline">
        <div class="column is-10-tablet">
          <!-- <h3 class="title is-3 has-text-centered">Un petit titre</h3> -->
          <p class="has-text-centered accroche">
            Créé en 1978, le CTT Puplinge compte une trentaine de membres, enfants, jeunes et moins jeunes.<br>
            Plusieurs équipes participent aux compétitions cantonales et nationales.<br>
            Différents cours sont dispensés dans les locaux mis à disposition par la commune: salle communale, salle de
            gymnastique (et abri PC - entraînement libre, robot).</p>
        </div>
      </div>
    </section>
    <section class=" main">
      <div class="columns is-multiline is-centered">
        <div class="column is-10-tablet">
          <h3 class="title is-3 has-text-centered">Dernières nouvelles</h3>
          <LastNews />
        </div>
      </div>
      <div class="">
        <div id="nuliga-content-teaser-meetings"></div>
        <div id="nuliga-content-teaser-ranking"></div>
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
  head() {
    return {
      title: 'Accueil',
      meta: [
        { hid: 'description', name: 'description', content: 'Bienvenue sur le site du CTT Puplinge' }
      ],
      script: [
        { src: 'https://clicktt.sportred.de/v1/lib/ZjA2ZjI3MjdlNzlkMTA5N2M0NzBmMmZjOTY2MTA4NWEwNmM3ZWVlNzQyZGNjOTBlZTg2ZWZlZmU2NDM5NDZjMQDcWtRJ9cVOkwHaGNNe1uVHiY6nGiJKE8MwALVtyIuo.js', async: true },
      ]

    }
  },
  mounted() {
      setTimeout(() => {
      if (typeof hb_api !== 'undefined') {
        hb_api.teaser_groupmeetings({ element: document.getElementById('nuliga-content-teaser-meetings'), id: 212644 });
        hb_api.teaser_groupranking({ element: document.getElementById('nuliga-content-teaser-ranking'), id: 212644, emptyLayout: true });
      }
    }, 1000);
  }

}

</script>
