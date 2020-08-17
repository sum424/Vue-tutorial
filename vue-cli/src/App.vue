<template>
 <div>
  <!--  <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
   <app-ninjas v-bind:ninjas="ninjas"></app-ninjas>
    <hr>
   <app-ninjas v-bind:ninjas="ninjas"></app-ninjas> 
   <app-footer v-bind:title="title"></app-footer> -->
  <!--  <form-helper>
     < <h2 slot="title">{{title}}</h2>
     <p slot="text">I am a paragraph for slot</p>> 
     <div class="" slot="form-header">
       <h3>This is title for form</h3>
       <p>Information about the form</p>
     </div>
     <div class="" slot="form-fields">
       <input type="text" placeholder="name" required>
       <input type="password" placeholder="password" required>
     </div>
     <div class="" slot="form-controls">
       <button v-on:click="handleSubmit">Submit</button>
     </div>
   </form-helper> -->
   <keep-alive>
    <component v-bind:is="component"></component>
   </keep-alive>
   <button v-on:click="component = 'form-one'">Show Form One</button>
   <button v-on:click="component = 'form-two'">Show Form Two</button>
 </div>
</template>
<script>
/* import Header from './components/Header.vue';
import Footer from './components/Footer.vue'; 
import Ninjas from './components/Ninjas.vue';  */
/* import formHelper from './components/formHelper.vue' */

import formOne from './components/formOne.vue'
import formTwo from './components/formTwo.vue'


export default {
  components: {
    /* 'app-header': Header, 
    'app-footer': Footer, 
    'app-ninjas': Ninjas */
    /* 'form-helper': formHelper */

    'form-one': formOne,
    'form-two': formTwo
  },
  data() {
    return {
      component: 'form-two',
      /* ninjas: [
            {name: 'Sum',speciality: 'Vue Components', show: false  },
            {name: 'Crystal',speciality: 'HTML Wizards', show: false  },
            {name: 'Ryu',speciality: 'Click Events', show: false  },
            {name: 'Kami',speciality: 'Conditionals', show: false  },
            {name: 'Goku',speciality: 'Webpack', show: false  },
            {name: 'Yoshi',speciality: 'Data Digging', show: false  }
        ],

      title: "Vue Ninjas Suman"    */
      title: 'I am a dynamic slot title.'
    }
  }, 
  methods: {
    /* updateTitle: function(updatedTitle) {
      this.title = updatedTitle; 
    }
    */
  }
}

</script>


<style scoped>

</style>
