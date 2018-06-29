<template>
  <article class="column is-8-tablet">
    <!-- <img v-bind:src="thumbnail" v-bind:alt="title"/> -->
   <h1 class="title is-1 has-text-centered">{{ title }}</h1>
    <div class="content">
         <!-- <p>{{ body }}</p> -->
     <div v-html="$md.render(body)"></div>

      <form name="contact" action="/merci" netlify-honeypot="bot-field" method="post" netlify>
        <input type="hidden" name="form-name" value="contact" />
        <p class="hidden">
          <label>Don’t fill this out: <input name="bot-field"></label>
        </p>
        <label class="form-label" for="name">
          Name:
        </label>
        <input class="form-field" name="name" id="name" />
        <label class="form-label" for="email">
          Email:
        </label>
        <input class="form-field" name="email" id="email" />
        <label class="form-label" for="message">
          Message:
        </label>
        <textarea class="form-field" name="message" id="message"></textarea>
        <input class="form-button" type="submit" value="Send message" />
      </form>
    </div>
  </article>
</template>

<script>
export
default {
    transition: 'page',
  async asyncData({ params }) {
    // const postPromise = process.BROWSER_BUILD
    //   ? import('~/content/blog/posts/' + params.slug + '.json')
    //   : Promise.resolve(
    //       require('~/content/blog/posts/' + params.slug + '.json')
    //     );

   let post = await import('~/content/contact.json');
    return post;
  }
};
</script>
<style media="screen">
  img {
    max-width: 300px;
  }
  .hidden {
    display: none;
  }
  form {
    display: flex;
    flex-direction: column;
  }
[type="submit"] {
  margin-top:3rem;
}
</style>
