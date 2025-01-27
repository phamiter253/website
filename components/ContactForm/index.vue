<template lang="pug">
  .contact-form
    .container
      .contact-form__column
        h1.contact-form__title Get In<br>Touch!
      .contact-form__column
        iframe(data-w-type="embedded" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://sj09z.mjt.lu/wgt/sj09z/xjnw/form?c=8ac56808" width="100%" style="height: 0;")
        component(is="script" type="text/javascript" src="https://app.mailjet.com/pas-nc-embedded-v1.js")
        //- form.contact-form__form(action="https://api.web3forms.com/submit" method="POST")
        //-   input(type="hidden" name="access_key" value="cfaf5161-2b2c-4080-b201-6e7f6a7823c9")
        //-   input(type="hidden" name="subject" value="New Contact Form Submission")
        //-   input(type="hidden" name="redirect" value="https://priscillahamiter.com/thank-you")
        //-   .contact-form__group
        //-     label.contact-form__label(for="name" class="form-label") Name
        //-     input(id="name" name="name" type="text" required)
        //-   .contact-form__group
        //-     label.contact-form__label(for="email" class="form-label") Email
        //-     input(id="email" name="email" type="text" required)
        //-   .contact-form__group
        //-     label.contact-form__label(for="phone" class="form-label") Phone
        //-     input(id="phone" name="phone" type="text")
        //-   .contact-form__group
        //-     label.contact-form__label(for="message" class="form-label") Message
        //-     textarea(id="message" name="message")
        //- button.contact-form__submit(type="submit") Send Message
</template>

<style lang="sass" src="./index.sass"></style> 
