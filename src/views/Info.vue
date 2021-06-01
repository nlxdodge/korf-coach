<template>
  <div class="info">
    <h1>Info</h1>
    <p>
      Deze app is gemaakt om gemakkelijk een training te kunnen `genereren`, om
      zo toch een goede training neer te kunnen zetten. Mocht je suggesties
      hebben kan je onderstaande knop gebruiken om een e-mail te sturen.

      <Button
        class="p-button-lg"
        label="E-mail sturen"
        @click="gotoEmailHandler()"
      />
    </p>
  </div>
</template>

<script>
import Button from 'primevue/button'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Info',
  components: {
    Button
  },
  methods: {
    gotoEmailHandler () {
      location.href =
        'mailto:nlxdodge@gmail.com&subject=[korfbal-trainer] Suggestie voor Korfbal Trainer'
    }
  }
})
</script>

<style lang="scss">
.info {
  h1 {
    text-align: center;
    color: #fff;
  }

  p {
    color: #fff;
  }

  button {
    margin-top: 25px;
    width: 100%;
  }
}
</style>
