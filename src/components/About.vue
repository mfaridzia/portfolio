<template>
  <div class="container-fluid">
    <div class="row">
      <Profile/> <!-- from Profile Component -->
      <section class="section-right col-md-8">
        <div class="row">
         <div class="col-md-10 intro-one">
             <h2> A Litle About Me <i class="fa fa-user-secret"></i> </h2>
             <p class="title-one"> A Young Dreamer  </p>
             <hr/>
             <p class="content-one">
                 Hello, My name is Muhammad Farid Zia an student of informatics engineering Telkom University
                bandung, West Java. I am a Web Developer especially in Frontend Developer. I have a passion for Web Development and i love Technology & Programming.
             </p>
         </div>
        </div>

         <div class="row">
            <div class="col-md-10 intro-two">
                <h2> My Skills </h2>
                <hr/>
                <p> HTML5 & CSS3 </p>
                <div class="progress">
                    <div class="progress-bar" style="width:95%">95%</div>
                </div>
                <p> PHP Programming Language </p>
                <div class="progress">
                    <div class="progress-bar bg-info" style="width:90%">90%</div>
                </div>
                <p> JavaScript / ES6 </p>
                <div class="progress">
                    <div class="progress-bar bg-warning" style="width:85%">85%</div>
                </div>
                <p> Node.js / Express.js </p>
                <div class="progress">
                    <div class="progress-bar bg-success" style="width:75%">75%</div>
                </div>
                <p> Bootstrap Framework </p>
                <div class="progress">
                    <div class="progress-bar bg-info" style="width:85%">85%</div>
                </div>
                <p> jQuery </p>
                <div class="progress">
                    <div class="progress-bar bg-primary" style="width:75%">75%</div>
                </div>
                <p> Laravel Framework </p>
                <div class="progress">
                    <div class="progress-bar bg-danger" style="width:80%">80%</div>
                </div>
                <p> MySQL / MariaDB </p>
                <div class="progress">
                    <div class="progress-bar bg-info" style="width:80%">80%</div>
                </div>
                <p> Version Control System Git </p>
                <div class="progress">
                    <div class="progress-bar bg-danger" style="width:75%">75%</div>
                </div>
                <p> Responsive Web Design </p>
                <div class="progress">
                    <div class="progress-bar bg-info" style="width:80%">80%</div>
                </div>
                <p> Vue.js / Nuxt.js Framework </p>
                <div class="progress">
                    <div class="progress-bar bg-success" style="width:85%">85%</div>
                </div>
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
.intro-one h2 {
    text-align: left;
    margin-top: 60px;
}
.intro-one .title-one {
    text-align: left;
    font-size: 18px;
}
.intro-one hr {
    width: 100%;
}
.intro-one .content-one {
    text-align: left;
}
.intro-two hr {
    margin-bottom: 35px;
}
.intro-two h2 {
    text-align: left;
    margin-top: 60px;
}
.intro-two p {
    text-align: left;
    margin: 15px 0px;
    font-size: 16px;
}
.intro-two .progress {
    margin-bottom: 40px;
}
</style>
