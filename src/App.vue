<template>
  <div>
    <NavigationComponent :items="navItems" />
    <router-view />
  </div>
</template>

<script setup lang="ts">
  import { onBeforeMount } from 'vue';
import { useStore } from 'vuex';
import NavigationComponent from './components/NavigationComponent.vue';

  const store = useStore()

  const navItems = [
    {
      label: 'Maak Training',
      icon: 'running',
      url: '/',
    },
    {
      label: 'Oefeningen',
      icon: 'list',
      url: '/exercises',
    },
    {
      label: 'Info',
      icon: 'question-circle',
      url: '/info',
    },
  ]

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
    width: 100%;
    height: 100%;
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
