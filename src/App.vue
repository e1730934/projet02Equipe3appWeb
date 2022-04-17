<template>
    <div>
        <MenuProfesseurView/>
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
};
</script>

<style>
</style>
