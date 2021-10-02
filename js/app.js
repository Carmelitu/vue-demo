const router = new VueRouter({
    base: 'Vue Demo',
    routes: [
        {
            path: '/list_person',
            component: ListPerson
        }, {
            path: '/list_programming',
            component: ListProgramming
        }
    ]
});

const app = new Vue({
    el: '#app',
    router
});