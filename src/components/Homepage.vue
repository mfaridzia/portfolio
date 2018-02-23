<template>
  <div class="container-fluid">
    <div class="row">
      <Profile/> <!-- from Profile Component -->
      <section class="section-right col-md-8">
        <div class="row">
          <div class="article col-md-4" v-for="post in posts" :key="post.guid" v-if="post.guid != 'https://medium.com/p/d1f22bb3d12b' && post.guid != 'https://medium.com/p/976088213b56'">
            <img :src="post.thumbnail" :alt="post.title" class="img-thumbnail">
            <h2> {{ post.title }} </h2>
            <a :href="post.guid" class="btn btn-default"> <i class="fa fa-arrow-circle-right"></i> Read More on Medium </a>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Profile from './Profile'

export default {
  data () {
    return {
      posts: []
    }
  },
  created() {
    this.fetchPosts()
  },
  methods: {
    fetchPosts() {
      axios.get(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@MFaridZia`)
      .then((resp) => {
        this.posts = resp.data.items
        console.log(resp)
      })
      .catch((err) => {
        console.log(err)
      })
    }
  },
  components: {
    Profile
  }
}
</script>

<style scoped>
.section-right {
  background: #fff;
}
.section-right .article {
  margin-bottom: 20px;
  border-radius: 5px;
}
.section-right h2 {
  font-size: 18px;
  padding: 20px 10px 10px 10px;
  background: #fafafa;
}
.section-right .article {
  background: #fafafa;
  border: 10px solid #fff;
  perspective: 1000;
	backface-visibility: hidden;
	transition: all 100ms ease-in-out;
	transition: all 100ms ease-in-out;
}
.section-right .article:hover {
  transform: translateY(-0.5em);
}
.img-thumbnail {
  width: 100%;
  min-height: 190px;
  margin-top: 10px;
}
.section-right a {
  color: #367fc4;
  margin-bottom: 10px;
}
.section-right a:hover {
  color: #000;
}
</style>
