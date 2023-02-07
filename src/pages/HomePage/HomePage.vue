<template class="homepage__container">
  <NavBar />
  <div class="homepage__container">
    <div class="homepage-img-1">
      <img :src='HomePageContent.DecorativeSection[0].src' :alt="HomePageContent.DecorativeSection[0].name"/>
    </div>
    <div class="homepage-img-2">
      <img :src='HomePageContent.DecorativeSection[1].src' :alt="HomePageContent.DecorativeSection[1].name"/>
    </div>
    <div class="homepage-circle"></div>
    <div class="homepage-text__wrapper">
      <div class="homepage-text__name">
        <span class="name">{{ HomePageContent.MainSection.AuthorFirstName }}</span>
        <span class="name">{{ HomePageContent.MainSection.AuthorLastName }}</span>
        <div class="title">
          {{ HomePageContent.MainSection.AuthorTitle }}
        </div>
      </div>
      <div class="homepage-text__intro">
        {{ HomePageContent.MainSection.AuthorSologan }}
      </div>
      <div class="homepage-text__btn">
        <Button btnName="explore my works"/>
      </div>
    </div>
    <div class="homepage-img-3">
      <img :src='HomePageContent.DecorativeSection[2].src' :alt="HomePageContent.DecorativeSection[2].name"/>
    </div>
  </div>
</template>

<script>
import { HomePageContent } from '@/data/HomePageContent';
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
        HomePageContent
      }
    }

}
</script>