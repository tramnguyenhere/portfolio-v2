<template>
  <NavBar :color="'#FFF'" :borderValue="'0 0 0 0'"/>
  <div class="project-list__container">
    <div class="project" v-for="project in workPageElements.sideProjects" :key="project.id">
      <span class="project__name">{{project.projectName}}</span>
      <img href="project.projectSourceCode" class="project__thumbnail" :src="project.projectImage" :alt="project.projectName"/>
      <div class="project__buttons">
        <Button btnName="demo" :href="project.projectDemoLink" />
        <Button btnName="source code" :href="project.projectSourceCode" />
      </div>
      <span class="project__description">{{project.projectDescription}}</span>
      <div class="project__technology-list">
        <div v-for="technology in project.technologiesUsed" :key="`technology-${technology}`" class="project__technology">
          <img :src="`img/techstack/${technology}.png`" :alt="technology" class="project__technology--icon"> 
          <span class="project__technology--description">{{technology}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import workPageElements from '@/data/WorkPageElements';
import NavBar from '@/components/NavBar/NavBar.vue';
import Button from '@/components/Button/Button.vue';
import './ProjectList.scss'

export default {
  name: 'ProjectList',
  components: {
    NavBar,
    Button
      
  },
  data () {
    return {
        workPageElements
      }
    }
}
</script>
