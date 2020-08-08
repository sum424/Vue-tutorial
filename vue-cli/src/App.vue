<template>
 <div>
   <app-header v-bind:title="title"></app-header>
   <app-ninjas v-bind:ninjas="ninjas"></app-ninjas>
   <!-- <hr>
   <app-ninjas v-bind:ninjas="ninjas"></app-ninjas> -->
   <app-footer v-bind:title="title"></app-footer>
 </div>
</template>
<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue'; 
import Ninjas from './components/Ninjas.vue'; 

export default {
  components: {
    'app-header': Header, 
    'app-footer': Footer, 
    'app-ninjas': Ninjas
  },
  data() {
    return {
      ninjas: [
            {name: 'Sum',speciality: 'Vue Components', show: false  },
            {name: 'Crystal',speciality: 'HTML Wizards', show: false  },
            {name: 'Ryu',speciality: 'Click Events', show: false  },
            {name: 'Kami',speciality: 'Conditionals', show: false  },
            {name: 'Goku',speciality: 'Webpack', show: false  },
            {name: 'Yoshi',speciality: 'Data Digging', show: false  }
        ],

      title: "Vue Ninjas Suman"   
    }
  }
}

</script>


<style scoped>

</style>
