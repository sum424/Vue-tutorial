<template>
<!-- For passing string, use additional string -->
  <div id="show-blogs" v-theme:column="'narrow'">
      <h1>All Blog Articles</h1>
      <input type="text" v-model="search" placeholder="search blogs">
      <div class="single-blog" v-for="blog in filteredBlogs" :key="blog"><!--v-bind  -->
          <router-link v-bind:to="'/blog/' + blog.id"><h2 v-rainbow="" >{{blog.title | to-uppercase}}</h2></router-link>
          <article>{{blog.content | snippet}}</article>
      </div>

  </div>
</template>

<script>
/* import func from '../../vue-temp/vue-editor-bridge'; */
import searchMixin from '../mixins/searchMixin';

export default {
  components: {
  },

  data () {
    return {
        blogs: [],
        search: ''
    }
  },
  methods: {
/* https://cors-anywhere.herokuapp.com/ */
  },
   created() {
       this.$http.get('https://vue-cli-blog-e152c.firebaseio.com/posts.json/').then(function(data){
         /* for fake api
           this.blogs = data.body.slice(0,10);
            console.log(data); */
            return (data.json());


       }).then(function(data) { 
           var blogsArray = [];
           for (let key in data) {
               data[key].id = key;
               blogsArray.push(data[key]);
           }
           this.blogs = blogsArray;
       } )
   },
   computed: {
       
   },
   filters: {
       'to-uppercase': function(value) {
           return value.toUpperCase();
       }
       /* or 
       toUppercase(value) {
           return value.toUpperCase();
       }
       */
   },
   directives: {
       'rainbow': {
           bind(el, binding, vnode) {
               el.style.color = "#" + Math.random().toString().slice(2, 8);
           }
       }
   },
   mixins: [searchMixin]
}
</script>

<style>
 #show-blogs {
     max-width: 800px;
     margin: 0 auto;
 }

 .single-blog {
     padding: 20px;
     margin: 20px 0;
     box-sizing: border-box;
     background: #eee;
 }



</style>
