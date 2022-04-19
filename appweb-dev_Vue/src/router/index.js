import { createRouter, createWebHistory } from 'vue-router';
import AccueilView from '@/views/AccueilView.vue';
import ConnexionView from '@/views/ConnexionView.vue';
import RequeteIPPEView from '@/views/RequeteIPPEView.vue';
import PersonnesView from '@/views/PersonnesView.vue';
import ConditionView from '@/views/ConditionView.vue';
import PersonneView from '@/views/PersonneView.vue';
import ObjetsView from '@/views/ObjetsView.vue';
import ArmeView from '@/views/ArmeView.vue';
import ReponseIPPEView from '@/views/ReponseIPPEView.vue';
import DescriptionPersonneView from '@/views/DescriptionPersonneView.vue';

const routes = [
    {
        path: '/',
        name: 'accueil',
        component: AccueilView,
    },
    {
        path: '/connexion',
        name: 'connexion',
        component: ConnexionView,
    },
    {
        path: '/requeteIPPE',
        name: 'requeteIPPE',
        component: RequeteIPPEView,
    },
    {
        path: '/personnes',
        name: 'personnesView',
        component: PersonnesView,
    },
    {
        path: '/condition',
        name: 'conditionView',
        component: ConditionView,
    },
    {
        path: '/personne/:IdPersonne',
        name: 'personneView',
        component: PersonneView,
    },
    {
        path: '/objets',
        name: 'objetsView',
        component: ObjetsView,
    },
    {
        path: '/arme',
        name: 'armeView',
        component: ArmeView,
    },
    {
        path: '/reponseIPPE',
        name: 'reponseIPPEView',
        component: ReponseIPPEView,
    },
    {
        path: '/personne/:IdPersonne/description',
        name: 'descriptionPersonneView',
        component: DescriptionPersonneView,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
