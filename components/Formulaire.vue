<template>

  <section class="section">

   <form method="POST" action="https://formspree.io/fabrice@banquise.ch">
   <input type="hidden" name="_next" value="https://ctt-puplinge.ch/merci" />
   <input type="hidden" name="_subject" value="Depuis ctt-puplinge.ch" />
   <input type="hidden" name="_cc" value="fab@wonderweb.ch" />
   <input type="hidden" name="_language" value="fr" />
   <input type="text" name="_gotcha" style="display:none" />

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

