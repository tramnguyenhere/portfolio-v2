<template>
  <router-link :to='navigationItem.navigationItemLink' class="nav-item" :key="navigationItem.id" v-for="navigationItem in NavigationBarElements">
    {{navigationItem.navigationItemName}}
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
