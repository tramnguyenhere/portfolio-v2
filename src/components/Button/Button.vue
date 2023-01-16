<template>
  <button class="btn">
    {{ btnName }}
  </button>
</template>

<script>
import './Button.scss'
export default {
    name: 'ButtonComp',
    props: {
        btnName: String
    }
}
</script>
