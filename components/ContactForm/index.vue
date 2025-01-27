<script setup>
  import axios from 'axios';

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post("https://formeezy.com/api/v1/forms/67972c7758208a0008474679/submissions", new FormData(e.target))
      .then(({ data }) => {
        const { redirect } = data;
        window.location.href = redirect;
      });
  }
</script>

<template lang="pug">
  .contact-form
    .container
      .contact-form__column
        h1.contact-form__title Get In<br>Touch!
      .contact-form__column
        form.contact-form__form(@submit="handleSubmit")
          .contact-form__group
            label.contact-form__label(for="name" class="form-label") Name
            input(id="name" name="name" type="text" required)
          .contact-form__group
            label.contact-form__label(for="email" class="form-label") Email
            input(id="email" name="email" type="text" required)
          .contact-form__group
            label.contact-form__label(for="phone" class="form-label") Phone
            input(id="phone" name="phone" type="text")
          .contact-form__group
            label.contact-form__label(for="message" class="form-label") Message
            textarea(id="message" name="message")
          //input(type="file" name="my-file")
          input(name="bot-field" type="text" style="display: none;")
        button.contact-form__submit(type="submit") Send Message
</template>

<style lang="sass" src="./index.sass"></style> 
