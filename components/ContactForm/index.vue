<script>
  import axios from 'axios';

  export default {
    name: 'ContactForm',
    data() {
      return {
        form: {
          name: "",
          email: "",
          message: "",
        },
      };
    },
    methods: {
      handleSubmit: async function() {
        const formData = new FormData();

        for (const [key, value] of Object.entries(this.form)) {
          formData.append(key, value);
        }

        await axios
          .post("https://formeezy.com/api/v1/forms/67972c7758208a0008474679/submissions", formData)
          .then(({ data }) => {
            const { redirect } = data;
            window.location.href = redirect;
          })
          .catch((e) => {
            window.location.href = e.response.data.redirect;
          });
      }
    }
  };
</script>

<template lang="pug">
  .contact-form
    .container
      .contact-form__column
        .contact-form__title-container
          //-svg.contact-form__star(viewBox="-100 -100 200 200" fill="currentColor" xmlns="http://www.w3.org/2000/svg")
            polygon(points=`0,-100 8,-25 38,-92 12,-23 71,-71 17,-17 92,-38 25,-8 100,0 25,8 92,38 17,17 71,71 12,23 38,92 8,25 0,100 -8,25 -38,92 -12,23 -71,71 -17,17 -92,38 -25,8 -100,0 -25,-8 -92,-38 -17,-17 -71,-71 -12,-23 -38,-92 -8,-25`)
          h1.contact-form__title Get In<br>Touch!
      .contact-form__column
        form.contact-form__form(@submit.prevent="handleSubmit")
          .contact-form__group
            label.contact-form__label(for="name" class="form-label") Name*
            input(id="name" v-model="form.name" type="text" name="name" required)
          .contact-form__group
            label.contact-form__label(for="email" class="form-label") Email*
            input(id="email" v-model="form.email" type="email" name="email" required)
          .contact-form__group
            label.contact-form__label(for="phone" class="form-label") Phone
            input(id="phone" name="phone" type="text")
          .contact-form__group
            label.contact-form__label(for="message" class="form-label") Message*
            textarea(id="message" v-model="form.message" name="message" required)
          input.bot-field(name="bot-field" type="text")
          button.contact-form__submit(type="submit" tabindex=0) Send Message
</template>

<style lang="sass" src="./index.sass"></style> 
