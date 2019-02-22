import './cmps/show-time-cmp.js';
import './cmps/count-down-cmp.js';
import './cmps/who-watch-cmp.js';

window.vueApp = new Vue({
    el: '#app',
    data: {
        timeStamp: Date.now() - 12000,
        users: [{ id: 1, name: 'user1', shows: ['show1', 'show2'] },
        { id: 2, name: 'user2', shows: ['show1', 'show3'] },
        { id: 3, name: 'user3', shows: ['show2'] },
        { id: 4, name: 'user4', shows: ['show3', 'show4'] },
        { id: 5, name: 'user5', shows: ['show1', 'show3', 'show5'] }]
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
                shows: shows.split(',')
            }
            this.users.push(user);
        },
        deleteUser(userId) {
            // console.log(userId);
            this.users = this.users.filter((item) => {
                return item.id != userId;
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