<template>
  <NavBar :color="'#FFF'" :borderValue="'0 0 0 0'"/>
  <div class="project-list__container">
    <div class="project" v-for="project in workPageElements.sideProjects" :key="project.id">
      <div class="project__details">
        <img href="project.projectSourceCode" class="project__thumbnail" :src="project.projectImage" :alt="project.projectName"/>
        <span class="project__name">{{project.projectName}}</span>
        <div class="project__description">
          {{project.projectDescription}}
          <div class="project__technology-list">
            <span v-for="technology in project.technologiesUsed" :key="`technology-${technology}`" class="project__technology">
              {{technology}}
            </span>
          </div>
        </div>
      </div>
      <div class="project__buttons">
        <Button btnName="demo" :href="project.projectDemoLink" />
        <Button btnName="source code" :href="project.projectSourceCode" />
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
