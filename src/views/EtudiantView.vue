<template>
    <h1 class="title is-1 has-text-centered">Bienvenue</h1>
    <div class="columns is-multiline is-mobile is-centered">
        <div class="column is-large is-info
        has-text-centered mb-4 ml-2 mr-2 is-3-desktop is-3-tablet is-3-mobile">
            <router-link v-bind:to="{ name: 'requeteIPPE'}">
                <img src ="/images/ippe.png" alt="requeteIPPE">
            </router-link>
        </div>
        <div class=" column is-large is-info
        has-text-centered mb-4 ml-2 mr-2 is-3-desktop is-3-tablet is-3-mobile">
            <router-link v-bind:to="{ name: 'armesView'}">
                <img src ="/images/ibaf.png" alt="armesView">
            </router-link>
        </div>
        <div class=" column is-large is-info
        has-text-centered mb-4 ml-2 mr-2 is-3-desktop is-3-tablet is-3-mobile">
            <router-link v-bind:to="{ name: 'objetsView'}">
                <img src ="/images/ibob.png" alt="objetsView">
            </router-link>
        </div>
        <div class=" column is-large is-info
        has-text-centered mb-4 ml-2 mr-2  is-3-desktop is-3-tablet is-3-mobile">
            <router-link v-bind:to="{ name: 'valeursView'}">
                <img src ="/images/ibva.png" alt="valeursView">
            </router-link>
        </div>
        <div class=" column is-large is-info
        has-text-centered mb-4 ml-2 mr-2 is-3-desktop is-3-tablet is-3-mobile">
            <router-link v-bind:to="{ name: 'SAAQView'}">
                <img src ="/images/dbq1.png" alt="dbq1">
            </router-link>
        </div>
        <div class=" column is-large is-info
        has-text-centered mb-4 ml-2 mr-2 is-3-desktop is-3-tablet is-3-mobile">
            <router-link v-bind:to="{ name: 'SAAQView'}">
                <img src ="/images/dbq2.png" alt="dbq2">
            </router-link>
        </div>
        <div class=" column is-large is-info
        has-text-centered mb-4 ml-2 mr-2 is-3-desktop is-3-tablet is-3-mobile">
            <router-link v-bind:to="{ name: 'SAAQView'}">
                <img src ="/images/dbq3.png" alt="dbq3">
            </router-link>
        </div>
        <div class=" column is-large is-info
        has-text-centered mb-4 ml-2 mr-2 is-3-desktop is-3-tablet is-3-mobile">
            <router-link v-bind:to="{ name: 'SAAQView'}">
                <img src ="/images/dbq4.png" alt="dbq4">
            </router-link>
        </div>
        <div class=" column is-large is-info
        has-text-centered mb-4 ml-2 mr-2 is-3-desktop is-3-tablet is-3-mobile">
            <router-link v-bind:to="{ name: 'SAAQView'}">
                <img src ="/images/dbq9.png" alt="dbq9">
            </router-link>
        </div>
    </div>
</template>

<script>

// noinspection JSUnusedGlobalSymbols
export default {
    name: 'EtudiantView',
};
</script>

<style scoped>
</style>
