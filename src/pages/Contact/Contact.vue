<template>
    <NavBar :color="'#CCBFAF'" :borderValue="'0 0 2px 0'"/>
    <div class="contact__container">
        <div class="contact__accounts">
            <span class="contact__account" v-for="account in contactPageElements.accounts" :key="account.id">
                {{ account.platform }}
            </span>
            <img :src="contactPageElements.decorativeElements[0].imageSource" :alt="contactPageElements.decorativeElements[0].imageName">
        </div>
        <div class="contact__form">
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScl_YVQlidIwVjOjVeVYJXN_bI59DDIgPRjSiDdQ7G_-A6fSA/viewform?embedded=true" width="640" height="645" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar/NavBar.vue';
import {contactPageElements} from '@/data/ContactPageElements.js'
import './Contact.scss'

export default {
    name: 'Contact',
    components: {
        NavBar
    },
    data () {
        return {
            contactPageElements
        }
    }
}
</script>

<style>

</style>