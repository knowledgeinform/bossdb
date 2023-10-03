<template>
    <div>
        <ProjectJSONLD :project="project" />
        <section
            class="hero is-primary css-hero"
            :style="{
                backgroundImage: 'url(' + project.hero + ')',
                backgroundPosition: project.heroPosition || 'center center',
            }"></section>
        <div class="container">
            <div class="section">
                <nav
                    class="breadcrumb has-dot-separator"
                    aria-label="breadcrumbs">
                    <ul>
                        <li>
                            <router-link to="/projects">PROJECTS</router-link>
                        </li>
                        <li class="is-active">
                            <a href="#" aria-current="page">{{
                                project.name
                            }}</a>
                        </li>
                    </ul>
                </nav>
                <h1 class="title">
                    {{ project.name }}
                </h1>

                <h2 class="subtitle">{{ project.blurb }}</h2>
                <div class="tags">
                    <span
                        v-for="tag in project.tags"
                        :key="tag"
                        class="tag is-rounded is-success is-light">
                        <router-link
                            :to="{
                                name: 'projects',
                                query: { selectedTags: JSON.stringify([tag]) },
                            }">
                            {{ tag }}
                        </router-link>
                    </span>
                </div>
                <div>
                    <div style="margin: 0.5em 0">
                        <span>
                            <DataTypeIcon dataType="volumetric" />
                            &nbsp;
                            <DataTypeIcon
                                v-if="(project.segmentation || []).length"
                                dataType="segmentation" />
                            &nbsp;
                            <DataTypeIcon
                                v-if="(project.connectomes || []).length"
                                dataType="connectomics" />
                        </span>
                    </div>
                </div>
                <div class="columns">
                    <div class="column is-7">
                        <div v-if="internDownloadCode">
                            <highlight-code lang="python">
                                {{ internDownloadCode }}
                            </highlight-code>

                            <div class="intern-docs-text">
                                <small>
                                    <b>intern</b>
                                    documentation is available
                                    <a
                                        href="https://github.com/jhuapl-boss/intern/wiki"
                                        >here</a
                                    >.
                                </small>
                                    
                                <a class="colab-button" target="_blank" :href="collabURL" v-if="collabURL">
                                        <img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/>
                                </a>
                            </div>

                        </div>
                        <div class="section">
                            <div
                                v-for="(pgraph, i) in markdownParagraphs"
                                :key="i">
                                <div class="content" v-html="pgraph" />
                                <br />
                            </div>
                        </div>
                    </div>

                    <div class="column is-5">
                        <div class="buttons">
                            <a class="link-button" target="_blank" :href="mgmtURL" v-if="mgmtURL">
                                <button class="button is-link">
                                    <i class="fas fa-external-link-alt"> </i>
                                    &nbsp; View on BossDB.io
                                </button>
                            </a>
                            
                            <a class="link-button" target="_blank" :href="metadataURL" v-if="metadataURL">
                                <button class="button is-dark">
                                    View Metadata
                                </button>  
                            </a>
                        </div>

                        <div class="card" v-if="project.brainloc">
                            <header class="card-header">
                                <p class="card-header-title">
                                    Physical Location
                                </p>
                            </header>
                            <div class="card-content">
                                <div
                                    class="center-image"
                                    v-if="project.brainloc">
                                    <img
                                        :src="
                                            require('@/assets/locations/' +
                                                project.brainloc +
                                                '.svg')
                                        " />
                                </div>
                            </div>
                        </div>

                        <br />
                        <div class="card-content">
                            <a :href="imageLink" target="_blank">
                                <div class="neuroglancer-autoload">
                                    <div
                                        class="
                                            neuroglancer-autoload-hover
                                        "></div>
                                    <img
                                        :src="require('@/assets/placeholder.png')"
                                        class="image"
                                        ref="exampleImage"
                                        style="border-radius: 1em"
                                        :class="
                                            imageRendered ? '' : 'is-hidden'
                                        " />
                                </div>
                            </a>
                        </div>

                        <br />
                        <br />

                        <div class="card" v-if="project.publications.length">
                            <header class="card-header">
                                <p class="card-header-title">Publications</p>
                            </header>
                            <div class="card-content">
                                <div
                                    class="content"
                                    v-for="publication in project.publications"
                                    :key="publication.name">
                                    <a :href="publication.url">{{
                                        publication.name
                                    }}</a
                                    >. 
                                    <cite v-if="publication.citationName">
                                        {{ publication.citationName }}
                                    </cite>
                                    <cite v-else>
                                        {{ publication.authors[0] }} et al.
                                    </cite>
                                    {{
                                        publication.venue
                                            ? `(${publication.venue})`
                                            : ""
                                    }}
                                </div>
                            </div>
                        </div>

                        <br />
                        <br />

                        <div v-if="coordinateFrames.length">
                            <CoordinateFrameCard
                                :coordinateFrames="coordinateFrames" />
                            <br />
                            <br />
                        </div>

                        <div class="card" v-if="project.links.length">
                            <header class="card-header">
                                <p class="card-header-title">Links</p>
                            </header>
                            <div class="card-content">
                                <div
                                    class="content"
                                    v-for="link in project.links"
                                    :key="link.name">
                                    <a :href="link.url">{{ link.name }}</a>
                                </div>
                                <hr />
                                <small>
                                    For anonymous read-only access to BossDB,
                                    use username
                                    <code>public-access</code> and password
                                    <code>public</code>
                                </small>
                                <br />
                            </div>
                        </div>

                        <br />
                        <br />

                        <div
                            id="extra-connectomes"
                            class="card"
                            v-if="(project.connectomes || []).length">
                            <header class="card-header">
                                <p class="card-header-title">
                                    <span style="margin-right: 1em">
                                        <ConnectomeIcon height="1.75em" />
                                    </span>
                                    Connectomes
                                </p>
                            </header>
                            <div class="card-content">
                                <br />
                                <div
                                    class="content"
                                    v-for="connectome in project.connectomes"
                                    :key="connectome.name">
                                    <a target="_blank" :href="connectome.url"
                                        >{{
                                            connectome.type == "MotifStudio"
                                                ? "Query"
                                                : "Download"
                                        }}
                                        {{ connectome.name }} in
                                        {{ connectome.type }}</a
                                    >
                                </div>
                            </div>
                        </div>

                        <div v-if="(project.connectomes || []).length">
                            <br />
                            <br />
                        </div>

                        <LicenseCard :project="project" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import showdown from "showdown";

import BossRemote from "@/intern.js";
import MetadataRemote from "@/metadata.js";
import ConnectomeIcon from "./datatypes/ConnectomeIcon.vue";
import DataTypeIcon from "./datatypes/DataTypeIcon.vue";
import CoordinateFrameCard from "./project_page/CoordinateFrameCard.vue";
import LicenseCard from "./project_page/LicenseCard.vue";
import ProjectJSONLD from "./project_page/ProjectJSONLD.vue";

export default {
    props: {
        project: {
            type: Object,
        },
    },

    components: {
        ConnectomeIcon,
        DataTypeIcon,
        CoordinateFrameCard,
        LicenseCard,
        ProjectJSONLD,
    },

    created() {
        let self = this;

        document.title = `BossDB.org | ${this.project.name}`;

        let bossRemote = new BossRemote();
        let metadataRemote =  new MetadataRemote();
        let collectionName = this.project.locations[0].uri.split("/")[0]; // should this just be this.project.id?

        //Takes in list of promises, outputs array of the results of the input promises IN ORDER!
        Promise.all(
            this.project.locations.map((location) =>
                bossRemote
                    .getCoordFrameForExperiment(
                        collectionName,
                        location.uri.split("/")[1]
                    )
                    .then((coordFrameName) => {
                        return bossRemote
                            .getCoordFrame(coordFrameName)
                            .then((cf) => {
                                let experimentName = location.uri.split("/")[1];
                                return {
                                    ...cf,
                                    experimentName,
                                    link: bossRemote._url(
                                        `mgmt/resources/${collectionName}/${experimentName}/`
                                    ),
                                };
                            });
                    })
            )
        ).then((promiseArray) => {
            self.coordinateFrames = promiseArray;
        });

        let x_mean = Math.round(
            (this.project.locations[0].xs[0] +
                this.project.locations[0].xs[1]) /
                2
        );
        let y_mean = Math.round(
            (this.project.locations[0].ys[0] +
                this.project.locations[0].ys[1]) /
                2
        );
        let z_mean = Math.round(
            (this.project.locations[0].zs[0] +
                this.project.locations[0].zs[1]) /
                2
        );

        let x_radius = Math.round(1024 / 3);
        let y_radius = Math.round(400 / 3);

        bossRemote
            .getCutoutPNG(
                this.project.locations[0].uri,
                0,
                [x_mean - x_radius, x_mean + x_radius],
                [y_mean - y_radius, y_mean + y_radius],
                [z_mean, z_mean + 1]
            )
            .then((blob) => {
                if (blob.type === 'image/jpeg'){
                    self.$refs.exampleImage.src = URL.createObjectURL(blob);
                }
                this.imageRendered = true;
            });
        
        metadataRemote
            .getProject(this.project.id).then((blob) => {
                this.metadataURL = `https://metadata.bossdb.org/#/Project/${blob.id}`;
            }).catch((error) => {
                console.error(`Unable to fetch meatdata for ${this.project.id}. ${error}`)
                this.metadataURL = undefined;
        })  
            
    },

    data() {
        let internDownloadCode = undefined;
        let mgmtURL = undefined;
        let collabURL = undefined;
        // Is this line necessary?
        let metadataURL = this.metadataURL;

        let imageLink = this.project.neuroglancer
            ? this.project.neuroglancer.url
            : undefined;
        if (this.project.locations) {
            let loc = this.project.locations[0];
            if (loc.xs && loc.ys && loc.zs) {
                loc.res = loc.res || 0;
                let uri = loc.uri.split("/");
                let state = {
                    layers: [
                        {
                            source: `boss://https://api.bossdb.io/${loc.uri}`,
                            type: "image",
                            name: uri[2],
                        },
                    ],
                    navigation: {
                        pose: {
                            position: {
                                voxelCoordinates: [
                                    Math.round((loc.xs[1] + loc.xs[0]) / 2),
                                    Math.round((loc.ys[1] + loc.ys[0]) / 2),
                                    Math.round((loc.zs[1] + loc.zs[0]) / 2),
                                ],
                            },
                        },
                        zoomFactor: 8,
                    },
                    showAxisLines: false,
                    layout: "xy",
                };

                imageLink =
                    imageLink ||
                    `https://neuroglancer.bossdb.io/#!` + JSON.stringify(state);

                internDownloadCode = `# Import intern (pip install intern)
from intern import array

# Save a cutout to a numpy array in ZYX order:
${uri[2]} = array("bossdb://${uri[0]}/${uri[1]}/${uri[2]}")
data = ${uri[2]}[${loc.zs.join(":")}, ${loc.ys.join(":")}, ${loc.xs.join(":")}]
`;
                
                mgmtURL = `https://api.bossdb.io/v1/mgmt/resources/${uri[0]}`
                collabURL = `https://colab.research.google.com/github/aplbrain/bossdb-collab-notebooks/blob/main/notebooks/notebook_${this.project.id}.ipynb`
            }
        }
        let converter = new showdown.Converter({
            simplifiedAutoLink: true,
            tables: true,
            openLinksInNewWindow: true,
        });
        let markdownParagraphs = this.project.description.map((i) =>
            converter.makeHtml(i)
        );
        return {
            internDownloadCode,
            imageLink,
            markdownParagraphs,
            metadataURL,
            mgmtURL,
            collabURL,
            coordinateFrames: [],
            imageRendered: false,
        };
    },
};
</script>


<style lang="scss" scoped>
.css-hero {
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 50vh;
}

.code-container {
    background: none;
    white-space: pre-wrap;
}

.code-highlighted {
    padding: 1em;
    border-radius: 1em;
}

.intern-docs-text {
    margin-left: 1.5em;
}


.colab-button{
    float: right;
}

.center-image {
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 30em;
}

.neuroglancer-autoload {
    position: relative;
    // Zoom slightly on hover:
    transition: transform 0.5s ease-in-out;
    &:hover {
        cursor: pointer;
        transform: scale(1.05);
        &::before {
            // scale and add a little shadow
            transform: scale(1.01);
            box-shadow: 0 0 0.5em 0.5em rgba(0, 0, 0, 0.1);
        }
    }
    &::before {
        content: "🔍 View on Neuroglancer";
        pointer-events: none;
        color: black;
        background: #dededecc;
        border-radius: 1em;
        padding: 0.2em 1em;
        font-weight: bold;
        position: absolute;
        bottom: 1em;
        right: 1em;
        z-index: 999;
    }
}

.neuroglancer-autoload-hover {
    // fill the parent but leave opacity at 0
    position: absolute;

    border-radius: 1em;
    z-index: 99;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.3;
    background-color: #aac;
    transition: opacity 0.5s;
    &:hover {
        opacity: 0;
        // background-color: rgba(0, 0, 0, 0.5);
    }
}

.link-button{
    padding: 0.2em;
}
</style>
