<template>
    <div id="app" class="content">
        <div class="nav content" id="nav">
            <span class="nav__logo">J</span>
            <router-link v-for="page in pages"
                         :key="page.name"
                         :class="navActive ? 'link link--active' : 'link'"
                         :to="page.route">{{page.name}}</router-link>
            <span @click="navActive = !navActive" :class="navActive ? 'nav__toggle--active' : ''" class="nav__toggle"/>
        </div>
        <router-view/>
    </div>
</template>

<script>
    import anime from 'animejs'
    export default {
        data: function () {
            return {
                navActive: false,
                pages: [
                    {
                        name: 'Home',
                        route: '/',
                    },
                    {
                        name: 'Abouts',
                        route: '/about',
                    },
                ],
            };
        },
        updated() {

        }
    }
</script>