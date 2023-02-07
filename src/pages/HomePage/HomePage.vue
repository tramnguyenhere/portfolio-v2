<template class="homepage__container">
  <NavBar />
  <div class="homepage__container">
    <div class="homepage-img-1">
      <img :src='homePageContent.decorativeElements[0].imageSource' :alt="homePageContent.decorativeElements[0].imageName"/>
    </div>
    <div class="homepage-img-2">
      <img :src='homePageContent.decorativeElements[1].imageSource' :alt="homePageContent.decorativeElements[1].imageName"/>
    </div>
    <div class="homepage-circle"></div>
    <div class="homepage-text__wrapper">
      <div class="homepage-text__name">
        <span class="name">{{ homePageContent.authorOverallInfo.firstName }}</span>
        <span class="name">{{ homePageContent.authorOverallInfo.lastName }}</span>
        <div class="title">
          {{ homePageContent.authorOverallInfo.title }}
        </div>
      </div>
      <div class="homepage-text__intro">
        {{ homePageContent.authorOverallInfo.slogan }}
      </div>
      <div class="homepage-text__btn">
        <Button btnName="explore my works"/>
      </div>
    </div>
    <div class="homepage-img-3">
      <img :src='homePageContent.decorativeElements[2].imageSource' :alt="homePageContent.decorativeElements[2].imageName"/>
    </div>
  </div>
</template>

<script>
import { homePageContent } from '@/data/HomePageContent';
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
        homePageContent
      }
    }

}
</script>