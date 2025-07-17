<template>
  <div>
    <div class="navigation-menu" @click="showNavigation = !showNavigation">
      <font-awesome-icon :icon="['fas', 'bars']" />
    </div>

    <div v-show="showNavigation" class="navigation-list">
      <div v-for="item in props.items" :key="item.label" class="navigation-item" @click="route(item.url)">
        <font-awesome-icon :icon="['fas', item.icon]" />
        <span class="label">{{ item.label }}</span>
      </div>
      <div class="navigation-item" @click="showNavigation = !showNavigation">
        <font-awesome-icon :icon="['fas', 'xmark']" />
        <span class="label">Sluiten</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()

let showNavigation = ref(false)

function route(url: String) {
  router.push({ path: url.toString() })
  showNavigation.value = false
}

const props = defineProps({
  items: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped lang="scss">
.navigation-menu {
  z-index: 999;
  position: fixed;
  right: 25px;
  bottom: 25px;
  width: 50px;
  height: 53px;
  font-size: 32px;
  color: $primary-color;
  background-color: white;
  box-shadow: 0px 0px 4px 1px grey;
  padding: 10px;
  text-align: center;
  border-radius: $border-radius;

  &:hover {
    cursor: pointer;
    color: lighten($primary-color, 25%);
  }
}

.navigation-list {
  z-index: 999;
  position: fixed;
  right: 25px;
  bottom: 25px;
  display: grid;
  justify-items: stretch;
  background-color: white;
  grid-template-rows: repeat(3, 75px);
  box-shadow: 0px 0px 4px 1px grey;
  grid-template-columns: 75px;
  border-radius: $border-radius;

  .navigation-item {
    font-size: 2rem;
    color: $primary-color;
    padding: 10px;
    text-align: center;

    &:first-child {
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;
    }

    &:last-child {
      border-bottom-left-radius: 3px;
      border-bottom-right-radius: 3px;
    }

    .label {
      display: block;
      font-size: 0.75rem;
      line-height: 12px;
    }

    &:hover {
      cursor: pointer;
      color: lighten($primary-color, 25%);
    }
  }
}
</style>
