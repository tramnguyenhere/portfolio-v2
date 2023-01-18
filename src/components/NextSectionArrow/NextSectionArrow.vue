<template>
    <div class="next-section__btn">
        <a :href='idPage'>
            <img src="img/others/arrow-down.png" alt="arrow">
        </a>
    </div>
</template>

<script>
export default {
    name: 'NextSectionArrow',
    props: {
        idPage: String
    }
}
</script>
