<template>
  <section class="section">
    <form method="POST" action="https://formspree.io/info@ctt-puplinge.ch">
      <input type="hidden" name="_next" value="https://ctt-puplinge.ch/merci">
      <input type="hidden" name="_subject" value="Depuis ctt-puplinge.ch">
      <input type="hidden" name="_cc" value="fab@wonderweb.ch">
      <input type="hidden" name="_language" value="fr">
      <input type="text" name="_gotcha" style="display:none">

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
        <p class="control has-icons-left">
          <input class="input" name="email" type="text" placeholder="Email">
          <span class="icon is-small is-left">
            <b-icon icon="email"></b-icon>
          </span>
        </p>
      </div>

      <div class="field">
        <div class="control">
          <input class="input" name="naissance" type="text" placeholder="Votre date de naissance">
        </div>
      </div>

      <div class="field">
        <div class="field-body">
          <div class="field">
            <p class="control has-icons-left">
              <input class="input" name="mobile" type="tel" placeholder="Téléphone portable">
              <span class="icon is-small is-left">
                <b-icon icon="phone"></b-icon>
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control has-icons-left">
              <input class="input" name="tel" type="tel" placeholder="Téléphone privé">
              <span class="icon is-small is-left">
                <b-icon icon="phone"></b-icon>
              </span>
            </p>
          </div>
        </div>
      </div>

      <div class="field">
        <div class="control">
          <input class="input" name="adresse" type="text" placeholder="Votre adresse">
        </div>
      </div>

      <div class="field">
        <div class="field-body">
          <div class="field">
            <p class="control is-expanded">
              <input class="input" name="Code postal" type="number" placeholder="Code postal">
            </p>
          </div>
          <div class="field">
            <p class="control is-expanded">
              <input class="input" name="localite" type="text" placeholder="Localité">
            </p>
          </div>
        </div>
      </div>
      <div class="field">
        <div class="control">
          <input class="input" name="nationalite" type="text" placeholder="Votre nationalité">
        </div>
      </div>
      <div class="field">
        <div class="control">
          <input class="input" name="avs" type="text" placeholder="Numéro AVS ">
          <p
            class="is-size-7 has-text-grey"
          >(Pour mineur uniquement - nécessaire à la demande de subvention)</p>
        </div>
      </div>

      <div class="field">
        <div class="control">
          <input type="checkbox" name="licence" value="licence"> Avez-vous déjà été licencié
          <br>
        </div>
      </div>
      <div class="field">
        <div class="control">
          <input type="checkbox" name="competition" value="competition"> Je souhaite une licence pour faire de la compétition
          <br>
        </div>
      </div>

      <div class="field">
        <div class="control">
          <textarea
            class="textarea"
            name="message"
            placeholder="Des remarques ? Tapez votre texte ici..."
          ></textarea>
        </div>
      </div>

      <div class="field">
        <div class="control">
          <button type="submit" class="button is-primary">Envoyer</button>
        </div>
      </div>
    </form>
  </section>
</template>
<script>
export default {
  name: "Formadmission"
};
</script>
