<template>
<div id="ninjas">
    <ul>
        <li v-for="ninja in ninjas" v-on:click="ninja.show=!ninja.show">
            <h2>{{ninja.name}}</h2>
            <h3 v-show="ninja.show">{{ninja.speciality}}</h3>
        </li>
    </ul>
    <button v-on:click="deleteNinja">Delete Ninja</button>
 </div>
</template>
<script>

export default {
    /* for validation */
    props: {
        ninjas: {
            type: Array,
            required: true
        }
    },
  data() {
    return {
        /* ninjas: [
            {name: 'Sum',speciality: 'Vue Components', show: false  },
            {name: 'Crystal',speciality: 'HTML Wizards', show: false  },
            {name: 'Ryu',speciality: 'Click Events', show: false  },
            {name: 'Kami',speciality: 'Conditionals', show: false  },
            {name: 'Goku',speciality: 'Webpack', show: false  },
            {name: 'Yoshi',speciality: 'Data Digging', show: false  }
        ] */
    }
  }, 
  methods: {
      deleteNinja: function() {
          this.ninjas.pop();
      }
  }
}

</script>


<style scoped>
    #ninjas {
        width: 100%;
        max-width: 1200px;
        margin: 40px auto;
        padding: 0 30px;
        box-sizing: border-box;
    }

    ul {
        display: flex;
        flex-wrap: wrap;
        list-style-type: none;
        padding: 0;
    }

    li {
        flex-grow: 1;
        flex-basis: 300px;
        text-align: center;
        padding: 30px;
        border: 1px solid #222;
    }
</style>
