<template>
  <div class="info-component">
    <FontAwesomeIcon :icon="['fas', 'question-circle']" @click="state.show = !state.show" />
    <Dialog v-model:visible="state.show" position="bottom" :closable="false">
      <template #header>{{ props.title }}</template>
      <slot></slot>
      <template #footer>
        <Button label="Sluiten" @click="state.show = !state.show" />
      </template>
    </Dialog>
  </div>
</template>
<script setup type="ts">
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { reactive } from "@vue/reactivity"


const props = defineProps({
  title: String
})
const state = reactive({
  show: false
})
</script>
<style scoped lang="scss">
.info-component {
  svg:hover {
    cursor: pointer;
  }
}
</style>