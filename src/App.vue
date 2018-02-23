<template>
  <div id="app" class="container-fluid">
   <nav>
      <ul>
        <li> <router-link to="/"> <i class="fa fa-home"></i>  </router-link> </li>
        <li> <router-link to="/about"> ABOUT </router-link> </li>
        <li> <router-link to="/portfolio"> PORTFOLIO </router-link> </li>
        <li> <router-link to="/contact"> CONTACT </router-link> </li>
        <li> <router-link to="/"> BLOG </router-link> </li>
      </ul>
   </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  background: #fff;
  margin: 0; padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

nav ul {
  list-style: none;
}
nav ul li {
  margin: 0; padding: 0;
  display: inline-block;
}
nav ul li a {
  padding: 40px 10px 20px 20px;
  display: block;
}
nav ul li a:hover {
  background: #edeff2;
  color: #000;
  text-decoration: none;
}
</style>
