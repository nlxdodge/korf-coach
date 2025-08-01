<template>
  <div class="scroll-up" v-if="showScrollUp" @click="scrollUp()">
    <font-awesome-icon :icon="['fas', 'circle-up']" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const pixelsDownToScroll = 250
const showScrollUp = ref(false)

window.onscroll = () => {
  showScrollUp.value =
    document.body.scrollTop > pixelsDownToScroll ||
    document.documentElement.scrollTop > pixelsDownToScroll
}

function scrollUp() {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}
</script>

<style scoped lang="scss">
.scroll-up {
  z-index: 998;
  position: fixed;
  right: 25px;
  bottom: 95px;
  width: 50px;
  height: 53px;
  font-size: 32px;
  color: theme.$primary-color;
  background-color: white;
  box-shadow: 0px 0px 4px 1px grey;
  padding: 6px;
  text-align: center;
  border-radius: theme.$border-radius;

  &:hover {
    cursor: pointer;
    color: theme.$primary-color-active;
  }
}
</style>
