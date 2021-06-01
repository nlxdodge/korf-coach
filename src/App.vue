<template>
  <div class="nav-hamburger" @click="visibleLeft = true">
    <font-awesome-icon :icon="['fas', 'bars']" />
  </div>
  <Sidebar v-model:visible="visibleLeft">
    <nav>
      <router-link to="/" @click="visibleLeft = false">
        <font-awesome-icon :icon="['fas', 'running']" />
        Maak Training</router-link
      >
      <router-link to="/exercises" @click="visibleLeft = false">
        <font-awesome-icon :icon="['fas', 'list']" />
        Oefeningen</router-link
      >
      <router-link to="/info" @click="visibleLeft = false">
        <font-awesome-icon :icon="['fas', 'question-circle']" />
        Info</router-link
      >
    </nav>
  </Sidebar>
  <router-view />
</template>

<script>
import Sidebar from 'primevue/sidebar'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Exercises',
  components: {
    Sidebar
  },
  data () {
    return {
      visibleLeft: false
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
}

nav {
  display: flex;
  flex-direction: column;

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
