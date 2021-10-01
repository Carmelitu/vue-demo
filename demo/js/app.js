const Foo = { template: '<div>foo</div>' };
const Bar = { template: '<div>bar</div>' };

const routes = [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
  ];

const router = new VueRouter({
    routes // short for `routes: routes`
});

const app = new Vue({
    el: '#app',
    router,
    data: {
        message: 'Hello Vue',
        sum: 3 + 6,
        isVisible: true,
        people: ['Paula', 'Lucas', 'Carmelo'],
        html_content: '<h1>Hello Vue!</h1>',
        src: 'https://www.arsys.es/blog/file/uploads/2020/04/01-vuejs.jpg',
        numero: 30,
        p_error: true
    },
    computed: {
        // a computed getter
        reversedMessage: function () {
            // `this` points to the vm instance
            return this.message.split('').reverse().join('');
        }
    },
    methods: {
        calculateSum: function (value1, value2){
            return value1 + value2;
        },
        decrementar: function() {
            return this.numero--;
        },
        incrementar: function() {
            return this.numero++;
        },
        cambiarError: function() {
            if(this.p_error == true){
                return this.p_error = false;
            } else {
                return this.p_error = true;
            }
        }
    },
    watch: {
        numero: function (value) {
            console.log(value);
        }
    }
})