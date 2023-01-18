<template class="homepage__container">
  <NavBar />
  <div class="homepage__container">
    <div class="homepage-img-1">
      <img :src='homepageData.decoImgs[0].src' :alt="homepageData.decoImgs[0].name"/>
    </div>
    <div class="homepage-img-2">
      <img :src='homepageData.decoImgs[1].src' :alt="homepageData.decoImgs[1].name"/>
    </div>
    <div class="homepage-circle"></div>
    <div class="homepage-text__wrapper">
      <div class="homepage-text__name">
        <span class="name">{{ homepageData.text.firstName }}</span>
        <span class="name">{{ homepageData.text.lastName }}</span>
        <div class="title">
          {{ homepageData.text.title }}
        </div>
      </div>
      <div class="homepage-text__intro">
        {{ homepageData.text.subtitle }}
      </div>
      <div class="homepage-text__btn">
        <Button btnName="explore my works"/>
      </div>
    </div>
    <div class="homepage-img-3">
      <img :src='homepageData.decoImgs[2].src' :alt="homepageData.decoImgs[2].name"/>
    </div>
  </div>
</template>

<script>
import { homepageData } from '@/data/homepageData';
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
        homepageData
      }
    }

}
</script>