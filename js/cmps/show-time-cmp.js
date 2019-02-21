Vue.component('show-time', {
    props: ['init'],
    template: `
        <section class="show-time">
            <h1>
                
            </h1>
        </section>
    `,
    data() {
        return {
            val: this.init
        }
    },
    methods: {

    },
    computed: {

    },
    created() {
        console.log('show-time component created!');
    }
})