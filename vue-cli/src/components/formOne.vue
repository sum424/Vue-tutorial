<template>
    <div>
        <form-helper>
            <div class="" slot="form-header">
                <h3>Form One - Contact Us</h3>
                <p>Fill the form to contact us</p>
            </div>
            <div class="" slot="form-fields">
                <input type="text" placeholder="name" required>
                <label for="">Your Message</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div class="" slot="form-controls">
                <button v-on:click="handleSubmit">Send</button>
         </div>
        </form-helper>
    </div>
</template>
<script>
import formHelper from './formHelper.vue'

export default {
    components: {
        'form-helper': formHelper
    },
  data() {
    return
  },
  methods: {
      handleSubmit: function() {
          alert('Thanks for submitting form and contacting us');
      }
  }
}

</script>


<style scoped>

</style>
