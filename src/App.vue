<template>
    <div id="app" class="content container" :class="loading ? 'container--loading' : ''">
        <div class="nav content" id="nav">
            <span class="nav__logo">ciavuc.co</span>
            <router-link v-for="page in pages"
                         :key="page.name"
                         :class="navActive ? 'link link--active' : 'link link--inactive'"
                         :to="page.route">
                {{page.name}}
            </router-link>
            <span @click="toggleNav()" :class="navActive ? 'nav__toggle--active' : ''" class="nav__toggle"/>
        </div>
        <router-view/>
        <footer>
            <p class="mono">Powered by caffeine & <a href="digitalocean">Digital Ocean</a></p>
            <p class="copyright">© {{ new Date().getFullYear() }} Joe Ciavucco</p>
        </footer>
    </div>
</template>

<script>
    import anime from 'animejs'

    export default {
        data: function () {
            return {
                loading: true,
                navActive: false,
                pages: [
                    {
                        name: 'Home',
                        route: '/',
                    },
                    {
                        name: 'Work',
                        route: '/work',
                    },
                ],
            };
        },
        methods: {
            toggleNav() {
                this.navActive = !this.navActive;
                if (this.navActive) {
                    anime({
                        targets: '.link',
                        translateX: [20, 0],
                        opacity: [0, 0.7],
                        filter: 'blur(' + 0 + 'px)',
                        easing: 'easeInOutQuad',
                        delay: anime.stagger(100) // increase delay by 100ms for each elements.
                    });
                } else {
                    anime({
                        targets: '.link',
                        translateX: [0, 20],
                        opacity: [0.7, 0],
                        filter: 'blur(' + 3 + 'px)',
                        easing: 'easeInOutQuad',
                        delay: anime.stagger(100) // increase delay by 100ms for each elements.
                    });
                }
            },
        },
        updated() {

        },
        mounted() {
            setTimeout(function () {
                this.loading = false;
            }.bind(this), 1000)
        },
        watch: {
            $route() {
                setTimeout(function () {
                    this.loading = false;
                }.bind(this), 1000)
            },
        },
    }
</script>