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
