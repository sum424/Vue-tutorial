new Vue({
    el: "#vue-app", 
    data: {
        output: '',
        div: 'how'
    }, 
    
    methods: {
        readRefs: function() {
            console.log(this.$refs.input.value);
            this.output = this.$refs.input.value;

            console.log(this.$refs.test.innerText);
            this.div = this.$refs.test.innerText;
        }

    },

    computed: {
        
    }
})