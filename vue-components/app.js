Vue.component('greeting', {
    template: '<p>Hey there I am reusable {{name}}<button v-on:click="changeName">Change Name</button></p>',
    data:function() {
        return {
            name: 'sum424'
        }
    },

    methods: {
      changeName: function() {
          this.name = 'Luigi';
      }      
    }
});
new Vue({
    el: "#vue-app-one", 
    data: {

    }, 
    
    methods: {
        
    },

    computed: {
        
    }
});

new Vue({
    el: "#vue-app-two", 
    data: {

    }, 
    
    methods: {
        
    },

    computed: {
        
    }
});