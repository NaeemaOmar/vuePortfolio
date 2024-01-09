<template>
   <div>
    <h2>Trying getters</h2>
    <h1>{{ $store.getters.getHeading }}</h1>
    <!-- <h1>{{$store.state.homePageHeading}}</h1> -->
    <!-- NOTE: the line above is displaying the heading for my home page -->
  </div>
  <div class="home">
    <h2>This is the name I imported from the store: {{ $store.state.name }}</h2>
    <button @click="$store.commit('girlName')">Girl Name</button>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
 
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
