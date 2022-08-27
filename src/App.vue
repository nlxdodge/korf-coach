<template>
  <div>
    <div
      class="nav-hamburger"
      @click="navVisible = true"
    >
      <font-awesome-icon :icon="['fas', 'bars']" />
    </div>
    <Sidebar
      :visible="navVisible"
      :show-close-icon="false"
    >
      <nav>
        <p>Korfbal Trainer</p>
        <router-link
          to="/"
          @click="navVisible = false"
        >
          <font-awesome-icon :icon="['fas', 'running']" />
          Maak Training
        </router-link>
        <router-link
          to="/exercises"
          @click="navVisible = false"
        >
          <font-awesome-icon :icon="['fas', 'list']" />
          Oefeningen
        </router-link>
        <router-link
          to="/info"
          @click="navVisible = false"
        >
          <font-awesome-icon :icon="['fas', 'question-circle']" />
          Info
        </router-link>
        <a
          href="#"
          @click="navVisible = false"
        >
          <font-awesome-icon :icon="['fas', 'arrow-alt-circle-left']" />
          Sluiten
        </a>
      </nav>
    </Sidebar>
    <router-view />
  </div>
</template>

<script setup lang="ts">
  import Sidebar from 'primevue/sidebar';
import { onBeforeMount, ref } from 'vue';
import { useStore } from 'vuex';

  const store = useStore()

  let navVisible = ref(false)

  onBeforeMount(() => {
    store.dispatch('loadData')
    console.log(
      'Loaded data from json file, categories:',
      store.state.categories.length,
      'exercises:',
      store.state.exercises.length,
    )
  })
</script>

<style lang="scss">
  $primary-color: #cc0c0c;

  html {
    background-color: $primary-color;
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
    -webkit-filter: drop-shadow(0 0 0.1rem rgba(0, 0, 0, 0.5));
    filter: drop-shadow(0 0 0.1rem rgba(0, 0, 0, 0.5));
  }

  nav {
    display: flex;
    flex-direction: column;

    p {
      text-align: center;
      color: $primary-color;
      font-weight: bold;
      font-size: 1.25rem;
      margin: 10px 0;
    }

    a {
      text-decoration-line: none;
      color: $primary-color;
      font-size: 1.25rem;
      padding: 10px;
      border-bottom: 2px solid $primary-color;

      svg {
        width: 40px;
      }
    }
  }
</style>
