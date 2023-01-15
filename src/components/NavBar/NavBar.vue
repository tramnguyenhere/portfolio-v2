<template>
  <div class="nav-bar__container">
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
  components: {
    BrandLogo,
    NavItem
  },
  
}
</script>
