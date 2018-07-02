<template>

  <section class="section">

   <form method="POST" action="https://formspree.io/fabrice@banquise.ch">
  <input type="email" name="email" placeholder="Your email">
  <textarea name="message" placeholder="Your message"></textarea>
  <button type="submit">Send</button>
</form>
  </section>
</template>
<script>
export default {
   name: 'Formulaire',
}
</script>

