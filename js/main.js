import './cmps/show-time-cmp.js';
import './cmps/count-down-cmp.js';
import './cmps/who-watch-cmp.js';

window.vueApp = new Vue({
    el: '#app',
    data: {
        timeStamp: Date.now() - 12000,
        users: [{ id: 1, name: 'user1', shows: ['show1', 'show2'], isEnable: true },
        { id: 2, name: 'user2', shows: ['show1', 'show3'], isEnable: true },
        { id: 3, name: 'user3', shows: ['show2'], isEnable: true },
        { id: 4, name: 'user4', shows: ['show3', 'show4'], isEnable: true },
        { id: 5, name: 'user5', shows: ['show1', 'show3', 'show5'], isEnable: true }],
    },
    methods: {
        updatetimeStamp(newTimeStamp) {
            this.timeStamp = newTimeStamp;
        },
        addUser() {
            console.log('addUser');
            var userName = prompt('User name:');
            var shows = prompt('Favorite shows:');
            var user = {
                id: this.findNextId(),
                name: userName,
                shows: shows.split(','),
                isEnable: true
            }
            this.users.push(user);
        },
        selectUser(user) {
            console.log(user);
            this.users.map((item) => {
                item.isEnable = false;
            });
            user.isEnable = true;
        },
        deleteUser(userId) {
            // console.log(userId);
            this.users = this.users.filter((item) => {
                return item.id != userId;
            });
        },
        switchUser() {
            this.users.map((item) => {
                item.isEnable = true;
            });
        },
        findNextId() {
            var max = 0;
            this.users.forEach((user) => {
                if (user.id > max) max = user.id;
            })
            return max + 1;
        }
    },
    computed: {

    }
})