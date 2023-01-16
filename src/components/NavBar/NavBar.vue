<template>
  <div class="nav-bar__container" :style="{background: color}">
    <BrandLogo />
    <div class="nav-bar__link" >
      <NavItem/>
    </div>
  </div>
</template>

<script>
import BrandLogo from '../BrandLogo/BrandLogo.vue';
import NavItem from './NavItem/NavItem.vue'
import './NavBar.scss'

export default {
  name: 'NavBar',
  props: {
    color: String
  },
  components: {
    BrandLogo,
    NavItem
  },
  
}
</script>
