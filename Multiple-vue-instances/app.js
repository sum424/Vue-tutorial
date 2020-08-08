var one = new Vue({
    el: "#vue-app-one", 
    data: {
        title: 'Vue App One'
    }, 
    
    methods: {
        
    },

    computed: {
        greet: function() {
            return "Hello from vue app one.";
        }
    }
});

var two = new Vue({
    el: "#vue-app-two", 
    data: {
        title: 'Vue App two'
    }, 
    
    methods: {
        changeTitle: function() {
            one.title = "The title has been hacked";
        }
    },

    computed: {
        
        greet: function() {
            return "Hello from vue app two.";
        }
    }
});