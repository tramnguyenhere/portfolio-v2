<template>
    <NavBar :color="'#CCBFAF'"/>
    <div class="about__container">
        <Headline borderValue="0 2px 0 0" :headlineContent="aboutmeData.headline.title.text" />
        <div class="about-main__wrapper">
            <div class="about__img">
                <img :src="aboutmeData.decoImgs[0].src" :alt="aboutmeData.decoImgs[0].name" >
            </div>
            <div class="about__intro">
                <span>{{aboutmeData.introPara.text}}</span>
                <span>{{aboutmeData.midPara.text}}</span> 
                <span>{{aboutmeData.finalPara.text}}</span>        
                <div class="about__resume">
                    <Button :href="aboutmeData.btns[0].link" :btnName="aboutmeData.btns[0].name"/>
                </div>
            </div>
        </div>
        <NextSectionArrow idPage="#about__details"/>
        <div id="about__details">
            <Headline borderValue="0 0 0 2px" :headlineContent="aboutmeData.headline.detailSectionTitle.text"/>
            <div class="about-details__tech">
                <div class="details-tech__frontend">
                    
                </div>
                <div class="details-tech__backend">

                </div>
                <div class="details-tech__others">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { aboutmeData } from '@/data/aboutmeData';
import NextSectionArrow from '@/components/NextSectionArrow/NextSectionArrow.vue';
import NavBar from '@/components/NavBar/NavBar.vue';
import Headline from '@/components/Headline/Headline.vue';
import Button from '@/components/Button/Button.vue';
import './AboutMe.scss'
export default {
    name: 'AboutMe',
    components: {
        NavBar,
        Button,
        Headline,
        NextSectionArrow
    },
    data () {
        return {
        aboutmeData
    }
   }
}
</script>
