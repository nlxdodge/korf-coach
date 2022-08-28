<template>
  <div class="info">
    <h1>Info</h1>
    <div class="flex-center">
      <Card>
        <template #content>
          <p>
            Deze app is gemaakt om gemakkelijk een training te kunnen `genereren`,
            om zo toch een goede training neer te kunnen zetten.
          </p>
          <p>
            Probleem gevonden of zelf een bijdragen maken aan Korfbal Trainer? Klik dan op onderstaande link.
            Korfbal Trainer is een Open Source project gemaakt in VueJS 3 + Composition API + Typescript + Yarn 2.
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
    color: #fff;
  }

  .flex-center {
    display: flex;
    justify-content: center;

    .p-card {
      max-width: 600px;

      a {
        color: #fff;
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
