<template>
  <div id="app">
    <div v-for="(item, index) in items" @click="toggleItem(index)" :class="{active: isActive === index}">
      <h1 style="font-weight: bold">{{item.text}}</h1>
      <div v-if="isActive === index" class="item-active">
        <p>{{ lorem }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data () {
    return {
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      items: [
        { text: "Audi RS3" },
        { text: "BMW M2" },
        { text: "Mercedes A45" }
      ],
      isActive: null
    }
  },
  methods: {
    toggleItem(index) {
      this.isActive = index;
    },
  }
};
</script>

<style>
body {
  background: #20262E;
  font-family: Helvetica;
}

#app {
  background: #fff;
}
.item-active p {
  color: black;
}
</style>
