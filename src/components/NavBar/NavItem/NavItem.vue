<template>
  <router-link :to='`/${navItem.link}`' class="nav-item" :key="navItem.id" v-for="navItem in navData">
    {{navItem.name}}
  </router-link>
</template>

<script>
import { navData } from '@/data/navData';
import './NavItem.scss'

export default {
  name: 'NavBar',
  data () {
    return {
      navData
    }
  }
}
</script>
