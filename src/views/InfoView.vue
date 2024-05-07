<template>
  <div class="info-view">
    <div class="flex-center">
      <Card>
        <template #title>
          <div class="align-center">Informatie</div>
        </template>
        <template #content>
          <p>
            Deze app is gemaakt om gemakkelijk een training automatisch te kunnen
            maken, om zo toch een goede training neer te kunnen zetten in een korte tijd.
          </p>
          <p>
            Heb je een probleem gevonden of zelf een bijdragen maken aan Korf Coach?
            Klik dan op onderstaande voor de Github Repository. Korf Coach is een Open Source
            project gemaakt in VueJS met de Composition API en Typescript.
          </p>
          <a href="https://github.com/nlxdodge/korf-coach">
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
.info-view {
  h1 {
    text-align: center;
    color: $secondary-color;
  }

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
</style>
