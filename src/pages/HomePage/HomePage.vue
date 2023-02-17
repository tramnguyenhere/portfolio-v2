<template class="homepage__container">
  <NavBar />
  <div class="homepage__container">
    <div class="homepage-img-1">
      <img :src='homePageElements.decorativeElements[0].imageSource' :alt="homePageElements.decorativeElements[0].imageName"/>
    </div>
    <div class="homepage-img-2">
      <img :src='homePageElements.decorativeElements[1].imageSource' :alt="homePageElements.decorativeElements[1].imageName"/>
    </div>
    <div class="homepage-circle"></div>
    <div class="homepage-text__wrapper">
      <div class="homepage-text__name">
        <span class="name">{{ homePageElements.authorOverallInfo.firstName }}</span>
        <span class="name">{{ homePageElements.authorOverallInfo.lastName }}</span>
        <div class="title">
          {{ homePageElements.authorOverallInfo.title }}
        </div>
      </div>
      <div class="homepage-text__intro">
        {{ homePageElements.authorOverallInfo.slogan }}
      </div>
      <div class="homepage-text__btn">
        <Button btnName="explore my works" :href="'/work'"/>
      </div>
    </div>
    <div class="homepage-img-3">
      <img :src='homePageElements.decorativeElements[2].imageSource' :alt="homePageElements.decorativeElements[2].imageName"/>
    </div>
  </div>
</template>

<script>
import { homePageElements } from '@/data/HomePageElements';
import NavBar from '@/components/NavBar/NavBar.vue';
import Button from '@/components/Button/Button.vue';
import './HomePage.scss'

export default {
    name: 'HomePage',
    components: {
    Button,
    NavBar
  },
  data () {
    return {
        homePageElements
      }
    }

}
</script>