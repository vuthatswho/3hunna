<template>
<div id="app">

<app-header></app-header>

<blog-post post-title="hello"></blog-post>
<blog-post post-title="bye"></blog-post>
<blog-post post-title="welcome"></blog-post>

<router-view></router-view>
<router-link to="/other">other</router-link>
<router-link to="/next">next</router-link>

<div>
  <button-counter></button-counter>
  <button-counter></button-counter>
  <button-counter></button-counter>
</div>

<app-footer></app-footer>
</div>

  <!-- <img src="./assets/logo.png">
  <h1>{{ msg }}</h1>
  <input type="text" v-on:input="changeTitle">
  <a v-bind:href="link">Nimbus</a>
  <button v-on:click ="increase">Click Me</button>
    <p>{{counter}}</p>
  <div class="demo"
  v-on:click="attachRed = !attachRed"
  v-bind:class="{red:attachRed}">
  </div> -->
  <!-- <div class="form-group">
    <button id="test" class="btn btn-primary" data-toggle="tooltip" data-placement="top" title="Tooltip on top">Submit</button>
    <button id="test2" class="btn btn-primary">click Here</button>
  </div> -->
</div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      // msg: 'Welcome to Your Vue.js App',
      // link: 'https://www.instagram.com/lepetitnimbus/?hl=en',
      // counter: 0,
      // attachRed: false
      show: true
    }
  },
  methods: {
    changeTitle: function(event) {
      this.msg = event.target.value;
    },
    increase: function() {
      this.counter++;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.demo {
  height: 100px;
  width: 100px;
  background-color: green;
}

.red {
  background-color: red;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
