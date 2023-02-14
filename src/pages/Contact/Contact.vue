<template>
    <NavBar :color="'#CCBFAF'" :borderValue="'0 0 0 0'"/>
    <div>HI</div>
</template>

<script>
import NavBar from '@/components/NavBar/NavBar.vue';
import './Contact.scss'

export default {
    name: 'Contact',
    components: {
        NavBar
    }
}
</script>

<style>

</style>