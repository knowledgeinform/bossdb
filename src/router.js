import Vue from "vue"
import Router from "vue-router"
import Home from "./views/Home.vue"
import Projects from "./views/Projects.vue"


const HACKS = [
    // Hack links:
    {
        path: "/microns/minnie",
        name: "project",
        props: { projectId: "microns-minnie" },
        meta: {
            title: "IARPA MICrONS Minnie"
        },
        component: () => import(/* webpackChunkName: "project" */ "./views/Project.vue")
    },
    {
        path: "/microns/pinky",
        name: "project",
        props: { projectId: "microns-pinky" },
        meta: {
            title: "IARPA MICrONS Pinky"
        },
        component: () => import(/* webpackChunkName: "project" */ "./views/Project.vue")
    },
    {
        path: "/microns/basil",
        name: "project",
        props: { projectId: "microns-basil" },
        meta: {
            title: "IARPA MICrONS Basil"
        },
        component: () => import(/* webpackChunkName: "project" */ "./views/Project.vue")
    },
    {
        path: "/microns/interneuron",
        name: "project",
        props: { projectId: "microns-interneuron" },
        meta: {
            title: "IARPA MICrONS Interneuron"
        },
        component: () => import(/* webpackChunkName: "project" */ "./views/Project.vue")
    },
    {
        path: "/prasad2020",
        name: "project",
        props: { projectId: "prasad2020" },
        meta: {
            title: "Prasad 2020"
        },
        component: () => import(/* webpackChunkName: "project" */ "./views/Project.vue")
    },
    {
        path: "/project/maniatesselvin_hildebrand_graham2020",
        name: "project",
        props: { projectId: "phelps_hildebrand_graham2020" },
        meta: {
            title: "Phelps, Hildebrand, & Graham 2020"
        },
        component: () => import(/* webpackChunkName: "project" */ "./views/Project.vue")
    },
    {
        path: "/project/allenInstitute2017",
        name: "project",
        props: { projectId: "allenMouseReferenceAtlas2017" },
        meta: {
            title: "Phelps, Hildebrand, & Graham 2020"
        },
        component: () => import(/* webpackChunkName: "project" */ "./views/Project.vue")
    },
];

const POSTS = [
    {
        path: "/post/syglass-bossdb",
        name: "post",
        props: { postId: "syglass-bossdb" },
        meta: {
            title: "SyGlass and BossDB"
        },
        component: () => import(/* webpackChunkName: "post" */ "./components/posts/SyGlass.vue")
    },
    {
        path: "/post/open-data",
        name: "post",
        props: { postId: "open-data" },
        meta: {
            title: "Sharing Open Data with BossDB"
        },
        component: () => import(/* webpackChunkName: "post" */ "./components/posts/OpenData.vue")
    }
]

Vue.use(Router)

let router = new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [

        ...HACKS,
        ...POSTS,

        {
            path: "/",
            name: "home",
            meta: {
                title: "Home"
            },
            component: Home
        },

        {
            path: "/privacy",
            name: "privacy",
            meta: {
                title: "Privacy Policy"
            },
            component: () => import(/* webpackChunkName: "privacy" */ "./views/PrivacyPolicy.vue")
        },
        {
            path: "/tos",
            name: "terms",
            meta: {
                title: "Terms of Service"
            },
            component: () => import(/* webpackChunkName: "privacy" */ "./views/TermsOfService.vue")
        },
        {
            path: "/projects",
            name: "projects",
            meta: {
                title: "Projects"
            },
            component: () => import(/* webpackChunkName: "projects" */ "./views/Projects.vue")
        },

        {
            // DO NOT CHANGE THIS.
            // Collaborators rely upon these URLs staying the same.
            path: "/project/:projectId",
            name: "project",
            props: true,
            meta: {
                title: "Project"
            },
            component: () => import(/* webpackChunkName: "project" */ "./views/Project.vue")
        },

        {
            path: "/tag/:tag",
            name: "tag",
            props: true,
            meta: {
                title: "Tagged"
            },
            component: () => import(/* webpackChunkName: "tag" */ "./views/Tag.vue")
        },

        // TOOLS AND TOOL PAGES
        {
            path: "/tools",
            name: "tools",
            meta: {
                title: "Tools"
            },
            component: () => import(/* webpackChunkName: "tools" */ "./views/Tools.vue")
        },
        {
            path: "/tools/:toolName",
            name: "tool",
            props: true,
            meta: {
                title: "Tools"
            },
            component: () => import(/* webpackChunkName: "tool" */ "./views/Tool.vue")
        },

        {
            path: "/about",
            name: "about",
            meta: {
                title: "About"
            },
            component: () => import(/* webpackChunkName: "about" */ "./views/About.vue")
        },
        {
            path: "/publications",
            name: "publications",
            meta: {
                title: "Publications"
            },
            component: () => import(/* webpackChunkName: "publications" */ "./views/Publications.vue")
        },
        {
            path: "/get-started",
            name: "getStarted",
            meta: {
                title: "Get Started"
            },
            component: () => import(/* webpackChunkName: "publications" */ "./components/GetStarted.vue")
        },

        // A 404 page:
        {
            path: "*",
            name: "NotFound",
            meta: { title: "404", },
            component: () => import(/* webpackChunkName: "NotFound" */ "./views/NotFound.vue")
        }
    ]
});

router.afterEach((next) => {
    document.title = `BossDB.org | ${next.meta.title}`;
    return next;
})

export default router;
