<div id="wrapper">
  <accordion :items="items"></accordion>
</div>
<template id="accordion">
  <ul>
    <li v-for="item in items" @click="openItem(item)">
      <div class="arrow_box" :class="{'arrow_box--open' : item.isopen}"></div>
      {{item.title}}
      <transition v-on:enter="enter" v-on:leave="leave">
        <div v-show="item.isopen" class="item">
           {{item.content}}
        </div>
      </transition>
    </li>
  </ul>
</template>
