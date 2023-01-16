<template>
  <div class="homepage__container">
    <div class="homepage-img-1">
      <img src="../../assets/img/homepage/homepage-1.png" alt="lamp"/>
    </div>
    <div class="homepage-img-2">
      <img src="../../assets/img/homepage/homepage-2.png" alt="laptop"/>
    </div>
    <div class="homepage-circle"></div>
    <div class="homepage-text__wrapper">
      <div class="homepage-text__name">
        <span class="name">tram</span>
        <span class="name">nguyen</span>
        <div class="title">
          frontend developer
        </div>
      </div>
      <div class="homepage-text__intro">
        sometimes I code, sometimes I wander around, detect the problems, and develop digital solutions
      </div>
      <div class="homepage-text__btn">
        <Button btnName="explore my works"/>
      </div>
    </div>
    <div class="homepage-img-3">
      <img src="../../assets/img/homepage/homepage-3.png" alt="tram"/>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button/Button.vue';
import './HomePage.scss'

export default {
    name: 'HomePage',
    components: {
        Button
    }

}
</script>