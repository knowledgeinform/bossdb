<template>
    <div class="container">
        <section class="section">
            <div class="container">
                <h1 class="title">Talks</h1>
                <div class="columns is-multiline">
                    <div
                        class="column is-4-widescreen is-6-tablet"
                        v-for="talk in talks"
                        v-bind:key="talk.title">
                        <div class="card">
                            <div class="card-image">
                                <iframe
                                    width="100%"
                                    height="300"
                                    :src="talk.youtubeEmbed"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen></iframe>
                            </div>
                            <div class="card-content">
                                <div class="media">
                                    <div class="media-left">
                                        <span class="icon">
                                            <i class="fas fa-comment-alt"></i>
                                        </span>
                                    </div>
                                    <div class="media-content">
                                        <div
                                            class="title is-6"
                                            style="min-height: 3.5em">
                                            <a :href="talk.youtubeLink">{{
                                                talk.title
                                            }}</a>
                                        </div>
                                        <div class="content">
                                            <b>{{ talk.byline }}</b>
                                            <br />
                                            <div>{{ talk.venue }}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="container">
                <div class="columns">
                    <div class="column">
                        <h1 class="title">Publications</h1>
                        <div v-for="pub in publications" v-bind:key="pub.title">
                            <div class="card">
                                <div class="card-content">
                                    <div class="media">
                                        <div class="media-left">
                                            <span class="icon">
                                                <i class="fas fa-book-open"></i>
                                            </span>
                                        </div>
                                        <div class="media-content">
                                            <div class="title is-6">
                                                <a :href="pub.link">
                                                    {{ pub.title }}
                                                </a>
                                            </div>
                                            <div class="content">
                                                {{ pub.authors }}
                                                <br />
                                                <div
                                                    v-html="pub.contents"
                                                    class="
                                                        small-abstract
                                                    "></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="container">
                <div class="columns">
                    <div class="column">
                        <h1 class="title">Posters</h1>
                    </div>
                </div>
                <div class="columns is-multiline">
                    <div
                        class="column is-4-desktop is-6-tablet"
                        v-for="pub in posters"
                        v-bind:key="pub.title">
                        <div class="card">
                            <div class="card-content">
                                <div class="media">
                                    <div class="media-left">
                                        <span class="icon">
                                            <i
                                                class="
                                                    fas
                                                    fa-chalkboard-teacher
                                                "></i>
                                        </span>
                                    </div>
                                    <div class="media-content">
                                        <div class="title is-6">
                                            <a :href="pub.link">{{
                                                pub.title
                                            }}</a>
                                        </div>
                                        <div class="content">
                                            <b>{{ pub.authors }},</b>
                                            {{ pub.venue }}
                                            <br />
                                            <div v-html="pub.contents"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="section">
            <p>
                <strong
                    >This research was enabled by NIH Grant R24MH114785 (PI
                    Brock Wester), NIH Grant 1R24MH114799 (PI Will Gray-Roncal),
                    and by the IARPA MICrONS Program.</strong
                >
            </p>
        </div>
        <div class="section">
            <h1 class="title">Contact Us</h1>
            <p>
                For any questions, suggestions or collaboration interests please
                contact:
                <a href="mailto:info@bossdb.org">info@bossdb.org</a>
            </p>
        </div>
    </div>
</template>


<script>
import posters from "@/posters.js";
import talks from "@/talks.js";
import publications from "@/publications.js";
import showdown from "showdown";

import _ from "lodash";

export default {
    data() {
        let converter = new showdown.Converter({
            simplifiedAutoLink: true,
        });
        return {
            posters,
            talks,
            publications: publications.map((event) => {
                return {
                    ...event,
                    contents: converter.makeHtml(event.contents.join("\n\n")),
                };
            }),
        };
    },
};
</script>


<style lang="scss" scoped>
.has-equal-height {
    height: 100%;
    display: flex;
    flex-direction: column;
}

.small-abstract {
    font-size: 0.8em;
    border-left: 2px solid #ccc;
    padding-left: 0.5em;
    margin-top: 2em;
}
</style>
