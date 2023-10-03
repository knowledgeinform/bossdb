<template>
    <div class="container">
        <div class="section">
            <h1 class="title">
                Tagged with
                <span class="tag is-rounded is-primary is-large">{{
                    tag
                }}</span>
            </h1>
        </div>
        <div>
            <div class="columns is-multiline">
                <div class="column is-4" v-for="(proj, i) in projects" :key="i">
                    <router-link :to="'/project/' + proj.id">
                        <div class="card has-equal-height">
                            <div class="card-image">
                                <figure class="image is-4by3">
                                    <img
                                        :src="proj.media || proj.hero"
                                        :alt="proj.name"
                                        style="width: auto; margin: auto;"
                                    />
                                </figure>
                            </div>
                            <div class="card-content">
                                <div class="media-content">
                                    <div class="title is-4">
                                        {{ proj.name }}
                                        <span v-if="proj.species">
                                            <img
                                                :src="
                                                    require('@/assets/species/' +
                                                        proj.species +
                                                        '.svg')
                                                "
                                                height="50"
                                                width="50"
                                                style="float: right;"
                                            />
                                        </span>
                                    </div>
                                    <div class="tags">
                                        <span
                                            v-for="tag in proj.tags"
                                            :key="tag"
                                            class="tag is-rounded is-success is-light"
                                        >
                                            <router-link :to="'/tag/' + tag">
                                                {{ tag }}
                                            </router-link>
                                        </span>
                                    </div>
                                </div>
                                <br />
                                <small class="content">
                                    {{ proj.blurb }}
                                </small>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
            <br />
        </div>
    </div>
</template>


<script>
import projects from "@/projects.js";
import _ from "lodash";

export default {
    props: {
        tag: String,
    },

    created() {
        document.title = `BossDB.org | Tagged with #${this.tag}`;
    },

    watch: {
        tag: function (newVal, oldVal) {
            document.title = `BossDB.org | Tagged with #${newVal}`;
        },
    },

    computed: {
        projects: function () {
            return _.sortBy(
                _.filter(projects, (proj) => {
                    return (
                        proj.public &&
                        !!~proj.tags
                            .join("~")
                            .toLowerCase()
                            .indexOf(this.tag.toLowerCase())
                    );
                }),
                (i) => i.date * -1
            );
        },
    },
};
</script>

<style lang="scss" scoped>
.has-equal-height {
    height: 100%;
    display: flex;
    flex-direction: column;
}
</style>
