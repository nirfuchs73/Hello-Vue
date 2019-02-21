Vue.component('show-time', {
    template: `
        <section class="show-time" v-bind:class="{'dark-bg': isDark}" v-on:click="darken()">
            <h1>
                Show Time
            </h1>
            <!--<button v-on:click="darken()">Click me</button>-->
            <img v-bind:src="imgUrl" />
            <!--<h1>{{time}}</h1>-->
            <h1>{{formattedTime}}</h1>
            <!--<h1>{{formattedSeason}}</h1>-->
            
        </section>
    `,
    data() {
        return {
            val: this.init,
            isDark: false,
            time: new Date(),
            season: null,
            interval: null
        }
    },
    methods: {
        darken() {
            // console.log('clicked');
            this.isDark = !this.isDark;
        },
        updateTime() {
            this.time = new Date();
            // if(this.time.getSeconds() === 0) clearInterval(this.interval);
        },
        getSeason() {
            // return 'Season';
            var month = this.time.getMonth();
            month = month + 1;
            if (month >= 3 && month <= 5) this.season = 'Spring';
            if (month >= 6 && month <= 8) this.season = 'Summer';
            if (month >= 9 && month <= 11) this.season = 'Autumn';
            if (month === 12 || month <= 2) this.season = 'Winter';
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
            return this.season;
        },
        imgUrl() {
            return `img/${this.season}.png`
        }
    },
    created() {
        console.log('show-time component created!');
        this.interval = setInterval(this.updateTime, 1000);
        this.getSeason();
    }
})