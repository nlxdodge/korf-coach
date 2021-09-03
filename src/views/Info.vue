<template>
  <div class="info">
    <h1>Info</h1>

    <Card>
      <template #content class="p-jc-between">
        <p>
          Deze app is gemaakt om gemakkelijk een training te kunnen `genereren`,
          om zo toch een goede training neer te kunnen zetten. Mocht je
          suggesties hebben kan je onderstaande knop gebruiken om een e-mail te
          sturen.
        </p>
        <a href="mailto:doodoking@live.nl">
          <Button class="p-button-lg">
            <font-awesome-icon :icon="['fas', 'envelope']" /> E-mail sturen
          </Button>
        </a>
        <p>
          Ook kan je zelf componenten toevoegen als programmeur. Korfbal Trainer
          is een Open Source project gemaakt in VueJS 3.0 + Typescript.
        </p>
        <a href="https://github.com/nlxdodge/korfbal-trainer">
          <Button class="p-button-lg">
            <font-awesome-icon :icon="['fab', 'github']" /> Github
          </Button>
        </a>
      </template>
    </Card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Button from 'primevue/button'
import Card from 'primevue/card'

export default defineComponent({
  name: 'Info',
  components: {
    Button,
    Card
  }
})
</script>

<style lang="scss">
.info {
  h1 {
    text-align: center;
    color: #fff;
  }

  a {
    color: #fff;
    text-align: center;
    text-decoration: none;

    button {
      display: block;
      width: 100%;
      margin: 10px auto;
    }
  }
}
</style>
