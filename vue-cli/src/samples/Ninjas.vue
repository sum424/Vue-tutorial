<template>
    <div>
        <h1>The list of Ninjas</h1>
            <ul>
                <li v-for="ninja in ninjas">{{ninja}}</li>
            </ul>
    </div>        
</template>
<script>


export default {
   
  name: 'app',
  data () {
    return {
      ninjas: ['Sum', 'Kyu', 'Ryu', 'Hattori']
    }
  }/* ,  for nested components

  methods: {
    greeting: function() {
      return 'hi back there'
    }

  } */
}
</script>


<style scoped>
h1 {
    color: aqua;
}
</style>
