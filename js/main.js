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
        }
    },
    computed: {

    }
})