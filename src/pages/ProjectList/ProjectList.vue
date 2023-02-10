<template>
  <NavBar :color="'#FFF'" :borderValue="'0 0 0 0'"/>
  <div class="project-list__container">
    <div class="project" v-for="project in workPageElements.sideProjects" :key="project.id">
      <span class="project__name">{{project.projectName}}</span>
      <img class="project__thumbnail" :src="project.projectImage" :alt="project.projectName"/>
      <span class="project__description">{{project.projectDescription}}</span>
      <div class="project__technology-list">
        <span v-for="technology in project.technologiesUsed" :key="`technology-${technology}`">{{technology}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import workPageElements from '@/data/WorkPageElements';
import NavBar from '@/components/NavBar/NavBar.vue';
import './ProjectList.scss'

export default {
  name: 'ProjectList',
  components: {
      NavBar
  },
  data () {
    return {
        workPageElements
      }
    }
}
</script>
