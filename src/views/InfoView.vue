<template>
  <div class="info">
    <h1>Korfbal Trainer</h1>
    <div class="flex-center">
      <Card>
        <template #title>
          <div class="align-center">Informatie</div>
        </template>
        <template #content>
          <p>
            Deze app is gemaakt om gemakkelijk een training te kunnen
            `genereren`, om zo toch een goede training neer te kunnen zetten.
          </p>
          <p>
            Heb je een probleem gevonden of zelf een bijdragen maken aan Korfbal Trainer?
            Klik dan op onderstaande link. Korfbal Trainer is een Open Source
            project gemaakt in Vue 3 met de Composition API en Typescript.
          </p>
          <a href="https://github.com/nlxdodge/korfbal-trainer">
            <Button class="p-button-lg">
              <font-awesome-icon :icon="['fab', 'github']" />Github
            </Button>
          </a>
        </template>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
  import Button from 'primevue/button';
import Card from 'primevue/card';
</script>

<style scoped lang="scss">
  .info {
    h1 {
      text-align: center;
      color: $secondary-color;
    }

    .flex-center {
      display: flex;
      justify-content: center;

      .p-card {
        max-width: 600px;

        a {
          color: $secondary-color;
          text-align: center;
          text-decoration: none;

          svg {
            margin-right: 10px;
          }

          button {
            display: block;
            width: 100%;
            margin: 10px auto;
          }
        }
      }
    }
  }
</style>
