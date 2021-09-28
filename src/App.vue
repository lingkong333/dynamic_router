<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">home</router-link> |
      <router-link to="about">about</router-link> |
      <router-link to="404">404</router-link> |
     <router-link to="one">one</router-link> |
      <router-link to="two">two</router-link> |
      <router-link to="three">three</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name:'App',
  computed: {
   
  },
  created(){
    console.log(this.$store);
  }
}
</script>