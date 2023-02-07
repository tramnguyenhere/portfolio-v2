<template>
    <NavBar :color="'#CCBFAF'" />
    <div class="about__container">
        <Headline borderValue="0 2px 0 0" :headlineContent="AboutMePageContent.headline.title.text" />
        <div class="about-main__wrapper">
            <div class="about__img">
                <img :src="AboutMePageContent.decoImgs[0].src" :alt="AboutMePageContent.decoImgs[0].name" >
            </div>
            <div class="about__intro">
                <span>{{AboutMePageContent.introPara.text}}</span>
                <span>{{AboutMePageContent.midPara.text}}</span> 
                <span>{{AboutMePageContent.finalPara.text}}</span>        
                <div class="about__resume">
                    <Button :href="AboutMePageContent.btns[0].link" :btnName="AboutMePageContent.btns[0].name"/>
                </div>
            </div>
        </div>
        <NextSectionArrow idPage="/about#about__details" direction="down"/>
        <div id="about__details">
            <Headline borderValue="0 2px 0 0" :headlineContent="AboutMePageContent.headline.detailSectionTitle.text"/>
            <TechnicalSkills />
        </div>
    </div>
</template>

<script>
import { AboutMePageContent } from '@/data/AboutMePageContent';
import TechnicalSkills from './TechnicalSkills/TechnicalSkills.vue';
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
        NextSectionArrow,
        TechnicalSkills
    },
    data () {
        return {
            AboutMePageContent,
    }
   }
}
</script>
