import { createRouter, createWebHistory } from 'vue-router';
import AccueilView from '@/views/AccueilView.vue';
import ConnexionView from '@/views/ConnexionView.vue';
import RequeteIPPEView from '@/views/RequeteIPPEView.vue';
import PersonnesView from '@/views/PersonnesView.vue';
import ConditionView from '@/views/ConditionView.vue';
import PersonneView from '@/views/PersonneView.vue';
import ObjetView from '@/views/ObjetView.vue';
import ArmeView from '@/views/ArmeView.vue';
import ReponseIPPEView from '@/views/ReponseIPPEView.vue';
import ValeurView from '@/views/ValeurView.vue';
import EtudiantView from '@/views/EtudiantView.vue';
import SAAQView from '@/views/SAAQView.vue';
import ArmesView from '@/views/ArmesView.vue';
import ObjetsView from '@/views/ObjetsView.vue';

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
        path: '/personne',
        name: 'personneView',
        component: PersonneView,
    },
    {
        path: '/reponseIPPE',
        name: 'reponseIPPEView',
        component: ReponseIPPEView,
    },
    {
        path: '/etudiant',
        name: 'etudiant',
        component: EtudiantView,
    },
    {
        path: '/arme',
        alias: '/arme/:id',
        name: 'armeView',
        component: ArmeView,
    },
    {
        path: '/valeur',
        alias: '/valeur/:id',
        name: 'valeurView',
        component: ValeurView,
    },
    {
        path: '/objet',
        alias: '/objet/:id',
        name: 'objetView',
        component: ObjetView,
    },
    {
        path: '/armes',
        name: 'armesView',
        component: ArmesView,
    },
    {
        path: '/objets',
        name: 'objetsView',
        component: ObjetsView,
    },
    {
        path: '/SAAQ',
        name: 'SAAQView',
        component: SAAQView,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
