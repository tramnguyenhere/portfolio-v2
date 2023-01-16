<template>
    <NavBar :color="'#CCBFAF'"/>
    <div class="about__container">
        <div class="about__title">
            I’m a web developer based in Finland. 
        </div>
        <div class="about-main__wrapper">
            <div class="about__img">
                <img src="../../assets/img/aboutme/aboutme-img-1.png" alt="" >
            </div>
        </div>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar/NavBar.vue';
import './AboutMe.scss'
export default {
    name: 'AboutMe',
    components: {
    NavBar
   }
}
</script>
