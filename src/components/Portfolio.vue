<template>
  <div class="container-fluid">
    <div class="row">
      <Profile/> <!-- from Profile Component -->
      <section class="section-right col-md-8">
        <div class="row portfolio">
          <!-- Vue news, vue pwa, mastel web app, nuxtjs, web portfolio ini  -->
          <div class="col-md-10">
            <h2> My Work <i class="fa fa-desktop"></i>  </h2>
            <p class="intro"> Below are some of the web apps I have created </p>
          </div>

          <div class="col-md-10 detail-project">
            <h3> Vue PWA Rss Feed </h3>
            <p> Simple pwa vue app for rss feeds on Medium articles </p>
            <a href="https://github.com/mfaridzia/vuejs-pwa-wwwid" class="btn btn-primary"> See Details </a>
          </div>

           <div class="col-md-10 detail-project">
            <h3> My Personal Web Portfolio </h3>
            <p> This is a personal Web Portfolio that I developed for personal use </p>
            <a href="https://github.com/mfaridzia/portfolio/" class="btn btn-primary"> See Details </a>
          </div>

          <div class="col-md-10 see-more">
            <p class="see-more-text"> <a class="see-more-text" href="https://github.com/mfaridzia/"> See more projects in my <b> <i class="fa fa-github"></i> github </b> account </a> </p>
          </div>

        </div>
      </section>

    </div>
  </div>
</template>

<script>
import Profile from './Profile'

export default {
  data () {
    return {
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
.portfolio h2 {
    text-align: center;
    margin-top: 60px;
    text-decoration: underline;
}
.portfolio .intro {
  text-align: center;
  font-size: 17px;
}
.detail-project {
  margin-top: 40px;
  border: 1px solid #ddd;
  padding: 10px;
}
.detail-project h3, p {
  text-align: left;
  margin-left: 10px;
}
.detail-project a {
  float: left;
  margin-left: 10px;
}
.see-more {
  margin: 30px 0px;
}
.see-more-text {
  text-align: center;
  font-size: 18px;
}
</style>
