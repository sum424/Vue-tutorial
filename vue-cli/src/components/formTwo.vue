<template>
    <div>
        <form-helper>
            <div class="" slot="form-header">
                <h3>Form Two - Log in</h3>
                <p>Enter your details for log-in</p>
            </div>
            <div class="" slot="form-fields">
                <input type="text" name="username" id="" required>
                <input type="password" name="password" id="" required>
            </div>
            <div class="" slot="form-controls">
                <button v-on:click="handleSubmit">Login</button>
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
          alert('thanks for logging in (form two');
      }
  }
}

</script>


<style scoped>

</style>
