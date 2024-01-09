<template>
  <NavBar/>
  <router-view/>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

  export default{
    components:{
      NavBar
    },
    computed:{
      getInfo(){
        this.$store.dispatch('getInfo');
      },
      actualHead(){
        this.$store.dispatch('setHomePageheading');
      }
    },
    mounted(){
      this.getInfo
      this.actualHead
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body{
  /* background: radial-gradient(circle, #EDB5A2, #4A351D); */
  background-color: #EDB5A2;
}

nav {
  /* padding: 30px; */
  /* main, darker peach #EDB5A2; */
  /* The nice blue = #2c3e50 */
  /* The nice brown = #4A351D */
  /* Greyish accent color = #E6D9CB*/
  /* softer peach = #F5E9DB */
}

nav a {
  font-weight: bold;
  color: #4A351D;
  padding: 20px;
}

nav a.router-link-exact-active {
  color: #E6D9CB;
}
</style>
