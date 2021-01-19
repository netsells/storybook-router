import VueRouter from 'vue-router';
import Vue from 'vue';

export default (story, { parameters }) => {
    if (!parameters.router) {
        return story();
    }

    const router = new VueRouter({
        mode: 'history',
        base: decodeURI('/'),
        linkActiveClass: 'nuxt-link-active',
        linkExactActiveClass: 'nuxt-link-exact-active',
    });

    const WrappedComponent = story();

    return Vue.extend({
        router,

        components: { WrappedComponent },

        template: '<wrapped-component />',

        created() {
            this.$router.addRoutes(parameters.router.routes || []);
        },
    });
};
