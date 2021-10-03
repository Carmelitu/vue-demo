const Home = {
    template: '#homepage'
}

const router = new VueRouter({
    base: 'Vue Demo',
    routes: [
        {
            path: '/',
            component: Home
        }, {
            path: '/list_person',
            component: ListPerson
        }, {
            path: '/list_programming',
            component: ListProgramming
        }, {
            path: '*',
            component: PageNotFound
        }
    ]
});

const app = new Vue({
    el: '#app',
    router,
    mounted(){
        console.log(this.$route);
    }
});