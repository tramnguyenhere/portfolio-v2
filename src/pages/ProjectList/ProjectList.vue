<template>
  <NavBar :color="'#CCBFAF'" :borderValue="'0 0 0 0'"/>
  <div class="project-list__wrapper">
    <div class="project-filter">
      <label>
        Projects with
        <select v-model="filteredOption">
          <option value="all">all technologies</option>
          <option v-for="option in aboutMePageElements.technicalSkillGroups.frontendTechStack" :key="option.id" :value="option.code">{{option.name}}</option>
        </select>
      </label>
    </div>
    <div class="project-list">
      <div class="project" v-for="project in filteredProjects" :key="project.id">
       <div class="project__card">
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
    </div>
  </div>
</template>

<script>
import {workPageElements} from '@/data/WorkPageElements';
import { aboutMePageElements } from '@/data/AboutMePageElements';
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
      aboutMePageElements,
      workPageElements,
      filteredOption: 'all'
    }
  },
  computed: {
    filteredProjects () {
      let filteredProjects = this.workPageElements.sideProjects
      let filteredOption = this.filteredOption

      if ( filteredOption !== 'all' )
      {
        filteredProjects = filteredProjects.filter( project => project.technologiesUsed.includes( filteredOption ) );
      }
  
      return filteredProjects
    }  
  }
}
</script>
