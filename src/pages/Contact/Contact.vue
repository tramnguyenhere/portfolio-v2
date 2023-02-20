<template>
    <NavBar :color="'#CCBFAF'" :borderValue="'0 0 2px 0'"/>
    <div class="contact__container">
        <div class="contact__call-to-action">
            <span>{{contactPageElements.callToAction.text}}</span>
            <img :src="contactPageElements.callToAction.arrowIcon" alt="arrow">
        </div>
        <div class="contact__accounts">
            <div class="contact__account" v-for="account in contactPageElements.accounts" :key="account.id">
                <Button :href="account.address" target="_blank" :btnName="account.platform"/>
                <i :class="account.platformIcon" />
            </div>
        </div>
        <div class="contact__form">
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScl_YVQlidIwVjOjVeVYJXN_bI59DDIgPRjSiDdQ7G_-A6fSA/viewform?embedded=true"  frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar/NavBar.vue';
import Button from '@/components/Button/Button.vue';
import {contactPageElements} from '@/data/ContactPageElements.js'
import './Contact.scss'

export default {
    name: 'Contact',
    components: {
        NavBar,
        Button
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