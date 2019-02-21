Vue.component('count-down', {
    props: ['timestamp'],
    template: `
        <section class="count-down">
            <h1>
                Count Down
            </h1>
            <!--<h1>{{count}}</h1>-->
            <h1 v-bind:class="{'red-bg': isRed}">{{formattedTime}}</h1>
        </section>
    `,
    data() {
        return {
            count: Math.floor((Date.now() - this.timestamp) / 1000),
            interval: null,
            isRed: false
        }
    },
    methods: {
        updateCount() {
            this.count--;
            if (this.count === 10) this.isRed = true;
            if (this.count === 0) clearInterval(this.interval);
        }

    },
    computed: {
        formattedTime() {
            var sec = this.count % 60;
            var min = Math.floor(this.count / 60);
            if (sec < 10) sec = '0' + sec;
            if (min < 10) min = '0' + min;
            return min + ':' + sec;
        },

    },
    created() {
        console.log('count-down component created!');
        this.interval = setInterval(this.updateCount, 1000);
    }
})