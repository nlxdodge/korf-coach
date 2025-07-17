<template>
  <div>
    <NavigationComponent :items="navItems" />
    <ScrollUp />
    <div class="flex-center">
      <img
        class="korf-coach-logo"
        src="../img/icons/android-chrome-192x192.png"
        alt="Korf Coach logo"
      />
      <h1>Korf Coach</h1>
    </div>
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { globalStore } from './store/GlobalStore';
import { onBeforeMount } from 'vue';
import NavigationComponent from './components/NavigationComponent.vue';
import ScrollUp from './components/ScrollUp.vue';

const store = globalStore()

const navItems = [
  {
    label: 'Maak Training',
    icon: 'running',
    url: '/'
  },
  {
    label: 'Traingen',
    icon: 'list',
    url: '/trainings'
  },
  {
    label: 'Oefeningen',
    icon: 'dumbbell',
    url: '/exercises'
  },
  {
    label: 'Info',
    icon: 'question-circle',
    url: '/info'
  }
]

onBeforeMount(() => {
  store.loadData()
  console.log(
    'Loaded data from json file, categories:',
    store.categories.length,
    'exercises:',
    store.exercises.length,
    'subExercises:',
    store.subExercises.length,
    'previous training with exercises',
    store.training.exercises.length,
    'trainings',
    store.trainings.length
  )
})
</script>

<style lang="scss">
html {
  background-color: theme.$primary-color;
  width: 100%;
  height: 100%;
}

body {
  margin-left: 15px;
  margin-right: 15px;
  padding-bottom: 50px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1 {
  color: #fff;
}

.korf-coach-logo {
  max-width: 50px;
  height: 100%;
}

.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
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
    color: theme.$primary-color;
    font-weight: bold;
    font-size: 1.25rem;
    margin: 10px 0;
  }

  a {
    text-decoration-line: none;
    color: theme.$primary-color;
    font-size: 1.25rem;
    padding: 10px;
    border-bottom: 2px solid theme.$primary-color;

    svg {
      width: 40px;
    }
  }
}

.p-card {
  border-radius: theme.$border-radius;
  filter: drop-shadow(50px 50px 50px rgba(28, 34, 33, 0.15));
  padding: 30px 20px 30px;

  .p-card-body {
    padding: 0;
  }

  .p-card-subtitle {
    margin-bottom: 0;
  }
}

.p-button {
  border-radius: theme.$border-radius;
}

.align-center {
  text-align: center;
}
</style>
