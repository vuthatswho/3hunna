<template>
<div id="app">
  <!-- navigation -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-item nav-link active" v-bind:href="linkHome">Home <span class="sr-only">(current)</span></a>
        <a class="nav-item nav-link" v-bind:href="linkImage">Image</a>
        <a class="nav-item nav-link" v-bind:href="linkAccordion">Accordion</a>
        <a class="nav-item nav-link" v-bind:href="linkGrid">Grid</a>
      </div>
    </div>
  </nav>

  <h1>Race Stats</h1>

  <!-- Grid for photos -->
  <h2>Images</h2>
  <div>
    <img v-for="photo in photos" :src="photo.url" :alt="photo.alt" class="img-fluid" data-toggle="tooltip" data-placement="bottom" title="Details about the photo">
    <button v-on:click="show = !show" type="button" name="button">Click to show</button>
  </div>
  <p v-if="show">More Cars to Come!</p>

  <!-- Accordion Page -->
  <h2>Accordion</h2>
  <app-accordion></app-accordion>
  <p>end page</p>

</div>
</template>

<script>
// Page data
export default {
  name: 'app',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      // Navigation Links
      linkHome: './index.html',
      linkImage: './image.html',
      linkAccordion: './accordion.html',
      linkGrid: './grid.html',
      // Create object for image page
      photos: [{
          url: 'https://cdntdreditorials.azureedge.net/cache/9/6/7/e/6/4/967e642d3e9795097e57d86f9be498eb50e5a396.jpg',
          alt: 'Audi RS3 Quattro'
        },
        {
          url: 'http://www.canadianautoreview.ca/images/car_photos/2019-bmw-m2-competition/normal/m2-competition-fs1.jpg',
          alt: 'BMW M2 Competition'
        },
        {
          url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/18c0618-012-1543506577.jpg?resize=480:*',
          alt: 'Mercedes A45 AMG'
        }
      ],
      // Create object for accordion cards
      accordions: [{
        title: 'Audi',
        body: 'Audi - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }, {
        title: 'BMW',
        body: 'BMW - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }, {
        title: 'Mercedes',
        body: 'Mercedes - Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }],
      // Use show to toggle element view when button clicked
      show: false
    }
  }
}
</script>

<style>
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

img {
  max-width: 30%;
  height: 15rem;
}
</style>
