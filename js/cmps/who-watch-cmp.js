Vue.component('who-watch', {
    props: ['user'],
    template: `
        <div class="who-watch" v-bind:class="{'hide': !user.isEnable}">
            <img v-bind:src="imgUrl" v-on:click="selectUser()"/>
            <h3>{{user.name}}</h3>
            <button v-on:click="deleteUser()">Delete</button>
            <select>
                <option v-for="show in user.shows" :value="show.value">{{show}}</option>
            </select>
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
            // console.log(this.user.shows);
            this.$emit('selected', this.user);
        },
    },
    computed: {
        imgUrl() {
            return `https://api.adorable.io/avatars/285/${this.user.name}.png`;
        },
    },
    created() {
        console.log('who-watch component created!');
    }
})