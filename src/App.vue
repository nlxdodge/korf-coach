<template>
  <div class="nav-hamburger" @click="navVisible = true">
    <font-awesome-icon :icon="['fas', 'bars']" />
  </div>
  <Sidebar v-model:visible="navVisible" :showCloseIcon="false">
    <nav>
      <p>Korfbal Trainer</p>
      <router-link to="/" @click="navVisible = false">
        <font-awesome-icon :icon="['fas', 'running']" />
        Maak Training</router-link
      >
      <router-link to="/exercises" @click="navVisible = false">
        <font-awesome-icon :icon="['fas', 'list']" />
        Oefeningen</router-link
      >
      <router-link to="/info" @click="navVisible = false">
        <font-awesome-icon :icon="['fas', 'question-circle']" />
        Info</router-link
      >
      <a href="#" @click="navVisible = false">
        <font-awesome-icon :icon="['fas', 'arrow-alt-circle-left']" />
        Sluiten
      </a>
    </nav>
  </Sidebar>
  <router-view />
</template>

<script lang="ts">
import Sidebar from 'primevue/sidebar'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Exercises',
  components: {
    Sidebar
  },
  beforeMount () {
    this.$store.dispatch('loadData')
    console.log(
      'Loaded data from json file, categories:',
      this.$store.state.categories.length,
      'exercises:',
      this.$store.state.exercises.length
    )
  },
  data () {
    return {
      navVisible: false
    }
  }
})
</script>

<style lang="scss">
html {
  background-color: #cc0c0c;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.nav-hamburger {
  color: #fff;
  position: fixed;
  top: 20px;
  left: 20px;
  font-size: 2.25rem;
  -webkit-filter: drop-shadow(0 0 0.1rem  rgba(0, 0, 0, 0.5));
  filter: drop-shadow(0 0 0.1rem  rgba(0, 0, 0, 0.5));
}

nav {
  display: flex;
  flex-direction: column;

  p {
    text-align: center;
    color: #cc0c0c;
    font-weight: bold;
    font-size: 1.25rem;
    margin: 10px 0;
  }

  a {
    text-decoration-line: none;
    color: #cc0c0c;
    font-size: 1.25rem;
    padding: 10px;
    border-bottom: 2px solid #cc0c0c;

    svg {
      width: 75px;
    }
  }
}
</style>
