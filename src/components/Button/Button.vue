<template>
  <a class="btn" :href='href'>
    {{ btnName }}
  </a>
</template>

<script>
import './Button.scss'
export default {
    name: 'ButtonComp',
    props: {
      btnName: String,
      href: String
    }
}
</script>
