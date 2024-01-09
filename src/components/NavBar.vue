<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/">MyPortfolio</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
        <li class="nav-item">
            <router-link to="/">Home</router-link> 
        </li>
        <li class="nav-item">
            <router-link to="/about">About</router-link> 
        </li>
        <li class="nav-item">
            <router-link to="/resume">Resume</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/projects">Projects</router-link> 
        </li>
        <li class="nav-item">
            <router-link to="/testimonials">Testimonials</router-link> 
        </li>
        <li class="nav-item">
            <router-link to="/contact">Contact</router-link> 
        </li>
    </div>
  </div>
</nav>
</template>

<script>
export default {

}
</script>

<style>

</style>

<!-- <template>
    <nav>
        <a>
            <router-link class="navbar-brand" to="/">MyPortfolio</router-link> 
        </a>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/resume">Resume</router-link> |
        <router-link to="/projects">Projects</router-link> |
        <router-link to="/testimonials">Testimonials</router-link> |
        <router-link to="/contact">Contact</router-link> |
    </nav>
</template>

<script>

</script>

<style>

</style> -->