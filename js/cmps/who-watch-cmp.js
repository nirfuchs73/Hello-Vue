Vue.component('who-watch', {
    props: ['user'],
    template: `
        <div class="who-watch">
            <img v-bind:src="imgUrl" v-on:click="selectUser()"/>
            <h3>{{user.name}}</h3>
            <button v-on:click="deleteUser()">Delete</button>
        </div>
    `,
    data() {
        return {

        }
    },
    methods: {
        deleteUser() {
            // console.log('delete ' + this.user.name);
            this.$emit('deleted', this.user.id);
        },
        selectUser() {
            console.log(this.user.shows);
        }
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