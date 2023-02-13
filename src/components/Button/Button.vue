<template>
  <a class="btn" :href='href'>
    {{ btnName }}
  </a>
</template>

<script>
import './Button.scss'
export default {
    name: 'Button',
    props: {
      btnName: String,
      href: String,
      paddingValue: String,
      fontSizeValue: String
    }
}
</script>
