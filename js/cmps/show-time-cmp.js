Vue.component('show-time', {
    template: `
        <section class="show-time" v-bind:class="{'dark-bg': isDark}" v-on:click="darken()">
            <h1>
                Show Time
            </h1>
            <!--<button v-on:click="darken()">Click me</button>-->
            <!--<h1>{{time}}</h1>-->
            <h1>{{formattedTime}}</h1>
            <h1>{{formattedSeason}}</h1>
        </section>
    `,
    data() {
        return {
            val: this.init,
            isDark: false,
            time: new Date()
        }
    },
    methods: {
        darken() {
            // console.log('clicked');
            this.isDark = !this.isDark;
        },
        updateTime() {
            this.time = new Date();
        }

    },
    computed: {
        formattedTime() {
            var sec = this.time.getSeconds();
            var min = this.time.getMinutes();
            if (sec < 10) sec = '0' + sec;
            if (min < 10) min = '0' + min;
            return this.time.getHours() + ':' + min + ':' + sec;
        },
        formattedSeason() {
            var month = this.time.getMonth();
            month = month + 1;
            if (month >= 3 && month <= 5) return 'Spring';
            if (month >= 6 && month <= 8) return 'Summer';
            if (month >= 9 && month <= 11) return 'Autumn';
            if (month === 12 || month <= 2) return 'Winter';
        }
    },
    created() {
        console.log('show-time component created!');
        setInterval(this.updateTime, 1000);
    }
})