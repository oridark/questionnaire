import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import AnswerManInfo from '../views/AnswerManInfo.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'AnswerManInfo',
        component: AnswerManInfo
    },
    {
        path: '/questions',
        name: 'questions',
        component: () => import(/* webpackChunkName: "about" */ '../views/Questions.vue')
    },
    {
        path: '/result',
        name: 'result',
        component: () => import(/* webpackChunkName: "about" */ '../views/Result.vue')
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
