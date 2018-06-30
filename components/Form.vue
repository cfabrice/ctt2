<template>

<section class="form">
  <form name="ctt" action="/merci" netlify-honeypot="bot-field" method="post" netlify>
    <input type="hidden" name="form-name" value="contact" />
    <p class="hidden">
      <label>Don’t fill this out:
        <input name="bot-field">
      </label>
    </p>
    <div class="field ">
      <div class="field-body">
        <div class="field">
          <p class="control is-expanded has-icons-left">
            <input class="input" name="nom" type="text" placeholder="Nom">
            <span class="icon is-small is-left">
              <b-icon icon="account" />
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
          <b-icon icon="email" />
        </span>
        <!-- <span class="icon is-small is-right">
              <b-icon icon="check" />
            </span> -->
      </p>
    </div>
    <div class="field">

      <div class="field ">
        <p class="control has-icons-left">
          <input class="input" name="tel" type="tel" placeholder="Votre téléphone">
          <span class="icon is-small is-left">
          <b-icon icon="phone" />
        </span>
          </p>
      </div>
    </div>



    <div class="field ">
      <div class="field-body">
        <div class="field">
          <div class="control">
            <input class="input" name="sujet" type="text" placeholder="Votre sujet">
          </div>
        </div>
      </div>
    </div>

    <div class="field">
      <div class="field-body">
        <div class="field">
          <div class="control">
            <textarea class="textarea" name="message" placeholder="Tapez votre texte ici..."></textarea>
          </div>
        </div>
      </div>
    </div>

    <div class="field ">
      <div class="field-label">
        <!-- Left empty for spacing -->
      </div>
      <div class="field-body">
        <div class="field">
          <div class="control">
            <button class="button is-primary">
              Envoyer
            </button>
          </div>
        </div>
      </div>
    </div>

  </form>
  </section>
</template>
<style>


</style>
