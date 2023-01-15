<template>
  <div class="app">
    <NavBar />
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './components/NavBar/NavBar.vue';
import './assets/styles/App.scss'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

