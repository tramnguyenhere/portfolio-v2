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
            <div class="about__intro">
                <span>I primarily focus on how to write efficient, and clean code and design applications from scratch with minimalistic and user-friendly interfaces.</span>
                <span>Most of my works are built with 
                    <span class="about--tech-stack">HTML, JavaScript, TypeScript, React.js, Vue.js, Node.js, Express, Redux, MongoDB,</span> and styled with <span class="about--tech-stack">CSS, SASS, Bootstrap</span>. I am mostly working with frontend, but my goal is to expand my tech stack to backend as well in the next 2 years.</span> 
                <span>Even if you are in need with another technology, please do not hesitate to contact me. ☺ My motto is to keep learning and do not mind challenging myself with the new technology.</span>        
                <div class="about__resume">
                    <Button btnName="myresume.pdf"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar/NavBar.vue';
import Button from '@/components/Button/Button.vue';
import './AboutMe.scss'
export default {
    name: 'AboutMe',
    components: {
        NavBar,
    Button
   }
}
</script>
