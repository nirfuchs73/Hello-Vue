Vue.component('show-coords', {
    props: ['init'],
    template: `
        <section class="show-coords">
            {{x}},{{y}}px
        </section>
    `,
    data() {
        return {
            x: null,
            y: null
        }
    },
    methods: {
        mousemoveListener(ev) {
            // console.log(ev);
            this.x = ev.offsetX;
            this.y = ev.offsetY;
        }
    },
    computed: {


    },
    created() {
        console.log('show-coords component created!');
        document.addEventListener('mousemove', this.mousemoveListener);
    }
})