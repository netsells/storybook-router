import VueRouter from 'vue-router';
import Vue from 'vue';

export default (story, { parameters }) => {
    Vue.use(VueRouter);

    const router = new VueRouter({
        mode: 'history',
        base: decodeURI('/'),
        linkActiveClass: 'nuxt-link-active',
        linkExactActiveClass: 'nuxt-link-exact-active',
    });

    Vue.component('nuxt-link', Vue.component('RouterLink'));

    const WrappedComponent = story();

    return Vue.extend({
        name: 'router-decorator',
        
        router,

        components: { WrappedComponent },

        template: '<wrapped-component />',

        created() {
            if (!parameters.router) {
                this.$router.addRoutes(parameters.router.routes || []);
            }
        },
    });
};
