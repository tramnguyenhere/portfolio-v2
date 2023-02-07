<template>
    <NavBar :color="'#CCBFAF'" />
    <div class="about__container">
        <Headline borderValue="0 2px 0 0" :headlineContent="aboutMePageElements.headlines.aboutMeSectionHeadline.content" />
        <div class="about-main__wrapper">
            <div class="about__img">
                <img :src="aboutMePageElements.decorativeImages[0].imageSource" :alt="aboutMePageElements.decorativeImages[0].imageName" >
            </div>
            <div class="about__intro">
                <span>{{aboutMePageElements.personalInformation.careerObjective.content}}</span>
                <span>{{aboutMePageElements.personalInformation.overallTechnicalSkills.content}}</span> 
                <span>{{aboutMePageElements.personalInformation.callToAction.content}}</span>        
                <div class="about__resume">
                    <Button :href="aboutMePageElements.buttons[0].buttonLink" :btnName="aboutMePageElements.buttons[0].buttonName"/>
                </div>
            </div>
        </div>
        <NextSectionArrow idPage="/about#about__details" direction="down"/>
        <div id="about__details">
            <Headline borderValue="0 2px 0 0" :headlineContent="aboutMePageElements.headlines.technicalSectionHeadline.content"/>
            <TechnicalSkills />
        </div>
    </div>
</template>

<script>
import { aboutMePageElements } from '@/data/AboutMePageElements';
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
            aboutMePageElements,
    }
   }
}
</script>
