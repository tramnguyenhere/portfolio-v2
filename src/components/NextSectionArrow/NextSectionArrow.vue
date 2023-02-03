<template>
    <div class="next-section__btn">
        <a :href='idPage'>
            <img :src="`img/others/arrow-${direction}.png`" alt="arrow">
        </a>
    </div>
</template>

<script>
import './NextSectionArrow.scss'
export default {
    name: 'NextSectionArrow',
    props: {
        idPage: String,
        direction: String
    }
}
</script>
