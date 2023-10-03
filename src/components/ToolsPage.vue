<template>
    <div class="container">
        <section class="section">
            <div class="container">
                <h1 class="title">Tools</h1>
                <p>
                    All of the tools listed here are open-source and available
                    for public use.
                </p>
            </div>
        </section>
        <section
            class="section"
            v-for="(tools, category_name) in tools"
            v-bind:key="category_name"
        >
            <div class="container">
                <h2 class="title is-4">{{ category_name }}</h2>
                <div class="columns is-multiline">
                    <div
                        v-for="tool in tools"
                        v-bind:key="tool.name"
                        class="column is-4-desktop is-6-tablet"
                    >
                        <div class="card">
                            <div class="card-content tool-card">
                                <div class="media">
                                    <div class="media-left">
                                        <span class="icon">
                                            <i class="fab fa-github"></i>
                                        </span>
                                    </div>
                                    <div class="media-content">
                                        <div class="title is-5">
                                            <router-link
                                                v-if="tool.description"
                                                :to="'/tools/' + tool.name"
                                                >{{ tool.name }}</router-link
                                            >
                                            <a v-else :href="tool.link">
                                                {{ tool.name }}
                                            </a>
                                        </div>
                                        <div class="content">
                                            {{ tool.blurb }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import tools from "@/tools.js";
export default {
    data() {
        return { tools: tools.categories };
    },
};
</script>

<style>
.tool-card {
    min-height: 10em;
}
</style>