<template lang="html">
  <div>
    <app-images img-path="http://lorempixel.com/400/300/city/1"></app-images>
    <!-- Grid for photos -->
    <div class="container">
      <div class="row">
        <div class="col-md">
          <img src="https://cdntdreditorials.azureedge.net/cache/9/6/7/e/6/4/967e642d3e9795097e57d86f9be498eb50e5a396.jpg" class="img-fluid" alt="Audi RS3 Quattro" data-toggle="tooltip" data-placement="bottom" title="Audi RS3">
        </div>
        <div class="col-md">
          <img src="http://www.canadianautoreview.ca/images/car_photos/2019-bmw-m2-competition/normal/m2-competition-fs1.jpg" class="img-fluid" alt="BMW M2 Competition" data-toggle="tooltip" data-placement="bottom" title="BMW M2">
        </div>
        <div class="col-md">
          <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/18c0618-012-1543506577.jpg?resize=480:*" class="img-fluid" alt="Mercedes A45 AMG" data-toggle="tooltip" data-placement="bottom" title="Mercedes A45">
        </div>
      </div>
    </div>

  </div>

</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
img {
  height: 12rem;
}
</style>
