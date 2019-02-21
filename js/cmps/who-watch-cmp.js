Vue.component('who-watch', {
    props: ['user'],
    template: `
        <div class="who-watch">
            <img v-bind:src="imgUrl" />
            <h3>{{user.name}}</h3>
        </div>
    `,
    data() {
        return {

        }
    },
    methods: {


    },
    computed: {
        imgUrl() {
            return `https://api.adorable.io/avatars/285/${this.user.name}.png`;
        }
    },
    created() {
        console.log('who-watch component created!');

    }
})