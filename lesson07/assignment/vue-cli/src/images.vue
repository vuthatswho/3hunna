<template>
      <section class="hero_home">
          <article>
            <h1>Images</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, aperiam doloremque possimus nemo incidunt, consequatur quidem facere in ipsam ratione quod? Provident laborum magnam accusantium sequi optio error sunt, sit.</p>
        </article>
            <img width="20%" height="25%" v-for="img in images" v-bind:src="img"/>
      </section>
</template>


<script>
    export default {
        components: {
        },
      data () {
        return {
            images: ['https://cdntdreditorials.azureedge.net/cache/9/6/7/e/6/4/967e642d3e9795097e57d86f9be498eb50e5a396.jpg',
                     'http://www.canadianautoreview.ca/images/car_photos/2019-bmw-m2-competition/normal/m2-competition-fs1.jpg',
                     'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/18c0618-012-1543506577.jpg?resize=480:*']
        }
      }
    }
</script>
