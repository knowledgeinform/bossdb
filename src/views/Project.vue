<template>
    <Project v-if="project.id" :project="project" />
</template>

<script>
import Project from "@/components/Project.vue";
import projects from "@/projects.js";
import BossRemote from "@/intern.js";

export default {
    components: {
        Project,
    },

    props: {
        projectId: {
            type: String,
        },
    },

    data() {
        return {
            project: {},
        };
    },

    created() {
        let bossRemote = new BossRemote();
        let projectData = projects[this.projectId];

        this.project = projectData;

        // bossRemote.getCollectionMetadata(this.projectId).then((res) => {
        //     this.project = res;
        //     this.project.hero = require("@/assets/projects/" + res.hero);
        //     this.project.media = require("@/assets/projects/" + res.media);
        // }).catch((err) => {
        //     // If the API returns an error, fall back on static file data
        //     console.error(err);
        //     this.project = projectData;
        // });
    },
};
</script>
