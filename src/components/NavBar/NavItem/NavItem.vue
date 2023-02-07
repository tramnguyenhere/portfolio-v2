<template>
  <router-link :to='navItem.link' class="nav-item" :key="navItem.id" v-for="navItem in NavigationBarElements">
    {{navItem.name}}
  </router-link>
</template>

<script>
import { NavigationBarElements } from '@/data/NavigationBarElements';
import './NavItem.scss'

export default {
  name: 'NavigationBar',
  data () {
    return {
      NavigationBarElements
    }
  }
}
</script>
