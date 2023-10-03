<template>
    <div>
        <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;700&display=swap"
            rel="stylesheet"
        />
        <div class="container">
            <div class="hero is-bold">
                <section class="section">
                    <h1 class="title">{{ tool.name }}</h1>
                    <h2 class="subtitle">{{ tool.blurb }}</h2>
                </section>
            </div>

            <div class="columns">
                <div class="column is-10 is-offset-1">
                    <section v-if="markdownParagraphs.length">
                        <div class="content">
                            <div
                                v-for="(pgraph, i) in markdownParagraphs"
                                :key="i"
                            >
                                <div v-html="pgraph" />
                                <br />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div
                class="columns"
                v-if="tool.manuscript && tool.manuscript.length"
            >
                <div class="column is-10 is-offset-1">
                    <section class="section" v-if="tool.manuscript">
                        <div class="paper content">
                            <div
                                v-for="(pgraph,
                                i) in manuscriptMarkdownParagraphs"
                                :key="i"
                            >
                                <div v-html="pgraph" />
                                <br />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <section class="section" v-if="tool.cite">
                <h1 class="title is-4">Cite as:</h1>
                <section v-if="tool.pub_link">
                        <p><a :href="tool.pub_link" > {{ tool.pub_link }} </a></p>
                        <br>
                    </section>
                <small
                    ><pre>{{ tool.cite }}</pre></small
                >
            </section>
        </div>
    </div>
</template>


<script>
import showdown from "showdown";

export default {
    props: {
        tool: {
            type: Object
        }
    },

    created() {
        document.title = `BossDB.org | ${this.tool.name}`;
    },

    data() {
        let converter = new showdown.Converter({
            simplifiedAutoLink: true,
            tables: true
        });
        let markdownParagraphs = this.tool.description
            ? this.tool.description.map(i => converter.makeHtml(i))
            : [];
        let manuscriptMarkdownParagraphs = this.tool.manuscript
            ? this.tool.manuscript.map(i => converter.makeHtml(i))
            : [];
        return {
            markdownParagraphs,
            manuscriptMarkdownParagraphs
        };
    }
};
</script>


<style lang="scss">
.css-hero {
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    min-height: 50vh;
}

.code-container {
    background: none;
}

.code-highlighted {
    padding: 1em;
    border-radius: 1em;
}

.intern-docs-text {
    margin-left: 1.5em;
}

.paper.content {
    // Article styling
    font-family: "Roboto Slab", Arial, sans-serif;
    background: #fdfdfd;
    box-shadow: 0 0 10px #ccc;

    figcaption,
    .abstract {
        font-family: Arial, Helvetica, sans-serif;
        width: 80%;
        margin: auto;
        text-align: justify;
    }

    padding: 3em;
    h1 {
        font-size: 1.5em;
    }
    h2 {
        font-size: 1.2em;
    }
    h3 {
        font-size: 1em;
    }
    figure {
        padding: 1em;
        border: 1px solid white !important;
    }
}
</style>
