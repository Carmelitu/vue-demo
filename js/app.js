const router = new VueRouter({
    base: 'Vue Demo',
    routes: [
        {
            path: '/lists',
            component: Lists
    }]
});

const app = new Vue({
    el: '#app',
    router
});