/* Vue Instance
    el: "" --for element to control
    data: --for storing object
*/
new Vue({
    el: '#vue-app',
    data: {
       /*  name: 'Suman',
        age: '25', */

        /* for data binding */
        name: '',
        age: 15,
        job: 'Developer',
        x: 0,
        y: 0,
        a: 0,
        b: 0,
        /*  Data Binding */
        website: 'http://www.thenetninja.co.uk',
        websiteTag: '<a  href=http://www.thenetninja.co.uk>web</a>'
    }, 

    /* Data and methods */
    methods: {
       /*  greet: function(time) {
            return 'Good ' + time + ' ' + this.name + 'Thank You for being a good ' + this.job;
            } */

        add:function(inc) {
            this.age += inc;
        },
        
        subtract:function(dec) {
            this.age -= dec;
        }, 

        updateXY: function(event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        }, 

        click: function() {
            alert('Mather father clicked me YAY');
        }, 

        logName: function() {
            console.log('you have entered your name');
        },

        logAge: function() {
            console.log('you have entered your age');
        }, 

        computed:  {
            addToA: function() {
                console.log('addToA');
                return this.a + this.age;
            },
    
            addToB: function() {
                console.log('addToB');
                return this.b + this.age;
            }
    
        }

    
    }

    /* For event */



});


/* Events */
