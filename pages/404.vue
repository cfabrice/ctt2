<template>


  <section class="section main">
      <div class="container">
        <div class="columns is-centered">
          <div class="container column is-8-tablet">

            <h1 class="title is-3 has-text-grey" v-if="error.statusCode === 404">Vous êtes sûr !? <b-icon icon="rocket" size="is-large" /> 404 !</h1>
            <h1 class="subtitle is-6 has-text-grey" v-else>Une erreur est survenue !</h1>
            <nuxt-link to="/">Retour sur la page d'accueil</nuxt-link>

          </div>
        </div>
      </div>

    </section>

</template>

