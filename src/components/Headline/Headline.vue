<template>
    <div class="headline" :style="{borderWidth: borderValue}">
        {{ headlineContent }} 
    </div>
</template>

<script>
import './Headline.scss'
export default {
    name: 'HeadlineComponent',
    props: {
        borderValue: String,
        headlineContent: String
    }
}
</script>
