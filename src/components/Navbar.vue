<template>
    <nav
        class="navbar is-black"
        :style="`height: 100%;
             background-image:url(${require('@/assets/header_footer.png')});
             background-repeat: no-repeat;
             background-size: cover
            `"
        role="navigation"
        aria-label="main navigation"
    >
        <div class="container">
            <div class="navbar-brand">
                <router-link class="navbar-item" to="/">
                    <Typemark size="1.5em" />
                    <Logo />
                </router-link>
                <a
                    role="button"
                    class="navbar-burger burger"
                    aria-label="menu"
                    @click="showNav = !showNav"
                    :class="{ 'is-active': showNav }"
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div class="navbar-menu" :class="{ 'is-active': showNav }">
                <div class="navbar-end">
                    <div
                        v-for="link in links"
                        v-bind:key="link.url"
                        class="navbar-item is-light"
                        :class="link.sublinks ? 'has-dropdown is-hoverable' : ''"
                    >
                        <component
                            :to="link.url"
                            :href="link.url"
                            :target="link.url.startsWith('http') ? '_blank' : ''"
                            :is="link.url.startsWith('http') ? 'a' : 'router-link'"
                        >
                            <span>{{ link.name }}</span>
                            <span class="icon" v-if="link.icon">
                                <i class="fas" :class="link.icon"></i>
                            </span>
                        </component>
                        <div v-if="link.sublinks" class="navbar-dropdown">
                            <component v-for="sublink in link.sublinks" v-bind:key="sublink.link"
                                :to="sublink.link"
                                :href="sublink.link"
                                :target="sublink.link.startsWith('http') ? '_blank' : ''"
                                class="navbar-item"
                                :is="link.url.startsWith('http') ? 'a' : 'router-link'"
                            >
                                <span>{{ sublink.name }}</span>
                            </component>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import Typemark from "@/components/Typemark.vue";
import Logo from "@/components/Logo.vue";
import tools from "@/tools.js";

const LINKS = [
    {
        url: "/projects",
        name: "Projects",
        icon: "fas fa-database",
    },
    {
        url: "/get-started",
        name: "Get Started",
        icon: "fa-arrow-alt-circle-right",
    },
    {
        url: "https://metadata.bossdb.org",
        name: "Metadata",
        icon: "fas fa-tag",
    },
    {
        url: "/tools",
        name: "Tools",
        icon: "fas fa-toolbox",
        sublinks: tools.featured_tools,
    },
    {
        url: "/publications",
        name: "Publications",
        icon: "fa-book-open",
    },
    // {
    //     url: "https://github.com/jhuapl-boss/boss/",
    //     name: "GitHub",
    //     icon: "fab fa-github",
    // },
    {
        url: "https://docs.theboss.io/",
        name: "API Docs",
        icon: "fa-book",
    },
    {
        url: "/about",
        name: "About",
    },
];

export default {
    components: {
        Typemark,
        Logo,
    },

    data() {
        return { showNav: false, links: LINKS };
    },
};
</script>

<style>
.navbar-end > .navbar-item > a,
.navbar-end > .navbar-item.has-dropdown {
    display: flex;
}

.navbar-end > .navbar-item.has-dropdown {
    padding: 0.5rem 0.75rem;
}


.navbar-end > .navbar-item > a {
    color: #4a4a4a;
}

.navbar-end > .navbar-item > a:hover,
.navbar-end > .navbar-item > a:focus,
.navbar-end > .navbar-item > a:active {
    color: #088;
}

.navbar-end > .navbar-item:hover,
.navbar-end > .navbar-item:focus,
.navbar-end > .navbar-item:active {
    background-color: #fafafa;
}

@media screen and (min-width: 1024px) {
    .navbar-end > .navbar-item > a,
    .navbar-end > .navbar-item > a:hover,
    .navbar-end > .navbar-item > a:focus,
    .navbar-end > .navbar-item > a:active {
        color: #fff;
    }

    .navbar-end > .navbar-item > a,
    .navbar-end > .navbar-item.has-dropdown {
        align-items: center;
    }

    .navbar-end > .navbar-item:hover,
    .navbar-end > .navbar-item:focus,
    .navbar-end > .navbar-item:active {
        background-color: #000;
    }
}
</style>
