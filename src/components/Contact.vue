<template>
  <div class="container-fluid">
    <div class="row">
      <Profile/> <!-- from Profile Component -->
      <section class="section-right col-md-8">
        <div class="row">
         <div class="col-md-10 intro-one">
            <h2> Contact Me <i class="fa fa-phone-square"></i> </h2>
            <p class="contact-text">
				You can contact me via email at : muhfaridzia@gmail.com <br/> 
            </p>
            <p class="contact-text">
                Or, if you want to send a message via telegram you can send it to @muhfaridzia or to my facebook account at fb.com/MuhFaridZia <br/>
            </p>

            <p class="contact-text">
                You can also follow my writing on medium blog <a href="https://medium.com/@MFaridZia">MFaridZia</a> <br/>
            </p>

            <p class="contact-text">
                Ok maybe that is it, thanks for your visit.
            </p>
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
.intro-one .contact-text {
    text-align: left;
    font-size: 19px;
}
</style>
