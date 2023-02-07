<template>
    <div class="about-details__tech">
        <div class="details-tech__wrapper" id="details-tech--frontend">
            <span class="details-tech__title">frontend development</span>
            <div class="details-tech__list">
                <span class="details-tech__item" v-for="skill in TechnicalSkillGroups.frontend" :key="skill.id" >
                    <img :src="`img/techstack/fe-${skill.code}.png`">
                    {{ skill.name }}
                </span>
            </div>
        </div>
        <div class="details-tech__wrapper" id="details-tech--backend">
            <span class="details-tech__title">backend development</span>
            <div class="details-tech__list">
                <span class="details-tech__item" v-for="skill in TechnicalSkillGroups.backend" :key="skill.id" >
                    <img :src="`img/techstack/be-${skill.code}.png`">
                    <span>{{ skill.name }}</span>
                </span>
            </div>
        </div>
    </div>
    <NextSectionArrow idPage="/about" direction="up"/>

</template>

<script>
import { TechnicalSkillGroups } from '@/data/TechnicalSkillGroups'
import NextSectionArrow from '../../../components/NextSectionArrow/NextSectionArrow.vue'
import './TechnicalSkills.scss'

export default {
    name: 'TechnicalSkills',
    components: {
        NextSectionArrow
    },
    data () {
        return {
            TechnicalSkillGroups
        }
    }
}
</script>
