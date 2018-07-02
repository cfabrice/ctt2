<template>

  <section class="section">

    <form name="contact" action="/merci" netlify-honeypot="bot-field" method="post" netlify>

      <p class="hidden">
        <label>Do not fill this out if you are human
          <input name="bot-field">
        </label>
      </p>

      <div class="field">
        <div class="field-body">
          <div class="field">
            <p class="control is-expanded has-icons-left">
              <input class="input" name="nom" type="text" placeholder="Nom">
              <span class="icon is-small is-left">
                <b-icon icon="account"></b-icon>
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control is-expanded">
              <input class="input" name="prenom" type="text" placeholder="Prénom">
            </p>
          </div>
        </div>
      </div>

      <div class="field">
        <p class="control  has-icons-left ">
          <input class="input" name="email" type="text" placeholder="Email">
          <span class="icon is-small is-left">
            <b-icon icon="email"></b-icon>
          </span>
        </p>
      </div>

      <div class="field ">
        <p class="control has-icons-left">
          <input class="input" name="tel" type="tel" placeholder="Votre téléphone">
          <span class="icon is-small is-left">
            <b-icon icon="phone"></b-icon>
          </span>
        </p>
      </div>

      <div class="field ">
            <div class="control">
              <input class="input" name="sujet" type="text" placeholder="Votre sujet">
            </div>
      </div>

      <div class="field">
        <div class="control">
          <textarea class="textarea" name="message" placeholder="Tapez votre texte ici..."></textarea>
        </div>
      </div>

      <div class="field ">
        <div class="control">
          <button type="submit" class="button is-primary">
            Envoyer
          </button>
        </div>
      </div>

    </form>
  </section>
</template>
<script>
export default {
   name: 'Formulaire',
}
</script>

