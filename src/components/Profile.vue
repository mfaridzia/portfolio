<template>
    <section class="section-left col-md-4">
        <img src="../assets/avatar.jpg" alt="Muhammad Farid Zia Photos's" class="avatar rounded-circle">
        <h3> Muhammad Farid Zia </h3>
        <p> Web Developer - Tech Enthusiast </p>
        <center>
            <div class="social">
            <ul>
                <li><a href="https://www.fb.com/MuhFaridZia" title="Facebook"><i class="fa fa-facebook"></i></a></li>
                <li><a href="https://twitter.com/Muhfaridzia" title="Twitter"><i class="fa fa-twitter"></i></a></li>
                <li><a href="https://github.com/mfaridzia" title="Github"><i class="fa fa-github"></i></a></li>
                <li><a href="mailto:muhfaridzia@gmail.com" title="Email"><i class="fa fa-envelope"></i></a></li>
                <li><a href="https://www.linkedin.com/in/muhfaridzia/" title="Linkedin"><i class="fa fa-linkedin"></i></a></li>
            </ul>
            </div>
        </center>
    </section>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.section-left {
  background: #fff; 
}
.section-left .avatar {
  width: 200px;
  height: 200px;
  margin-top: 90px;
  box-shadow: 0px 0px 5px #000;
}
.section-left h3 {
  margin-top: 20px;
  font-size: 23px;
}
.section-left p {
  color: #5d5e60;
}
.section-left .social {
  /*margin-top: -80px;*/
  margin-top: 35px;
  margin-bottom: 35px;
  margin-left: 0px;
}
.section-left .social ul li {
  display: inline-block;
  margin: 0 5px;
}
.section-left .social i.fa {
  font-size: 25px;
  padding: 4px 5px;
  color: #000;
  transition: all 0.5s;
}
.section-left .social i.fa-facebook:hover {
  color: #155591;
}
.section-left .social i.fa-github:hover {
  color: #2c3e50;
}
.section-left .social i.fa-twitter:hover {
  color: #3498db;
}
.section-left .social i.fa-linkedin:hover {
  color: #2980b9;
}
.section-left .social i.fa-envelope:hover {
  color: #a5a2a2;
}
 /* ----- End Section Left ---- */
</style>
