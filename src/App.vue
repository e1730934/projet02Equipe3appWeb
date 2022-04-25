<template>
    <div>
        <MenuProfesseurView v-if="Professeur === true"/>
        <HeaderView/>
        <router-view/>
    </div>
</template>

<script>

import MenuProfesseurView from '@/components/MenuProfesseurView.vue';
import HeaderView from '@/components/HeaderView.vue';

export default {
    name: 'App',
    components: { MenuProfesseurView, HeaderView },
    data() {
        return {
            Professeur: true,
        };
    },
};
</script>

<style>
</style>
