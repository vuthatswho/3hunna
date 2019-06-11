<template>
  <div id="app">

    <!-- Creat app-header component to serve as universal header for site -->
    <!-- App-header contains routers to all other page apps -->
    <app-header></app-header>
    <h1>The Portfolio</h1>
    <blog-post post-title="hello"></blog-post>
    <blog-post post-title="bye"></blog-post>
    <blog-post post-title="welcome"></blog-post>

  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<style>
</style>
