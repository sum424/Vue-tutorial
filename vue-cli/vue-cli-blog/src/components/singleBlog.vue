<template>
    <div id="single-blog">
        <h1>{{blog.title}}</h1>
        <article>{{blog.content}}</article>
        <p>Author: {{blog.author}}</p>
        <ul>
            <li v-for="category in blog.categories">{{category}}</li>
        </ul>

    </div>
</template>
 
<script>
import searchMixin from '../mixins/searchMixin';

export default {

  data () {
    return {
        id: this.$route.params.id,
        blog: {}
    }
  },
/*fake rest API http://jsonplaceholder.typicode.com/posts/ */
  created() {
      this.$http.get('https://vue-cli-blog-e152c.firebaseio.com/posts/' + this.id + '.json').then(function(data) {

          /* console.log(data); */
          return data.json();
          /* this.blog = data.body; */
      }).then(function(data) {
          this.blog = data;
      })
  }
}
</script>

<style scoped>
    #single-blog {
        max-width: 960px;
        margin: 0 auto;
    }


</style>
