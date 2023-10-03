<template>
    <div>
        <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;700&display=swap"
            rel="stylesheet" />
        <div class="container">
            <div class="hero is-bold">
                <section class="section">
                    <h1 class="title">Getting Started</h1>
                    <div class="container">
                        <div class="columns">
                            <div class="column is-3-widescreen is-5-tablet">
                                <h2 class="subtitle">
                                    Resources to help you get started using
                                    BossDB public data right away
                                </h2>
                            </div>
                            <div class="column">
                                <iframe
                                    width="100%"
                                    height="400"
                                    src="https://www.youtube.com/embed/wevgvbNykFI"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <section class="section">
                <div class="container">
                    <h1 class="title">Tutorial Videos</h1>
                    <div class="columns is-multiline">
                        <div
                            class="column is-3-widescreen is-5-tablet"
                            v-for="talk in tutorialVideos"
                            v-bind:key="talk.title">
                            <div class="card">
                                <div class="card-image">
                                    <iframe
                                        width="100%"
                                        height="200"
                                        :src="talk.youtubeEmbed"
                                        frameborder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen></iframe>
                                </div>
                                <div class="card-content">
                                    <div class="media">
                                        <div class="media-left">
                                            <span class="icon">
                                                <i
                                                    class="
                                                        fas
                                                        fa-comment-alt
                                                    "></i>
                                            </span>
                                        </div>
                                        <div class="media-content">
                                            <div class="title is-6">
                                                <a :href="talk.youtubeLink">{{
                                                    talk.title
                                                }}</a>
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
                    <h1 class="title">
                        The BossDB Cookbook: How-tos and Examples
                    </h1>
                    <h2 class="subtitle">
                        Check out our collection of introductory notebooks and
                        examples for interfacing with the BossDB system.
                    </h2>
                    <div class="columns">
                        <div class="column is-offset-1 left">
                            <img
                                src="@/assets/bossdbcookbook.png"
                                width="100" />
                        </div>
                        <div class="column right">
                            <p>
                                Click
                                <a
                                    href="https://github.com/aplbrain/bossdb_cookbook"
                                    >here</a
                                >
                                to view the cookbook!
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section">
                <div class="container">
                    <h1 class="title">
                        Five-Minute Jumpstart: Downloading public data from
                        BossDB
                    </h1>
                </div>
            </section>

            <div class="columns">
                <div class="column is-10 is-offset-1">
                    <section v-if="markdownParagraphs.length">
                        <div class="content">
                            <div
                                v-for="(pgraph, i) in markdownParagraphs"
                                :key="i">
                                <div v-html="pgraph" />
                                <br />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import showdown from "showdown";
import showdownHighlight from "showdown-highlight";

import { tutorialVideos } from "@/tutorials.js";

const fiveMinutes = `

> Looking for the no-frills, down-to-business tutorial to get started downloading subsets of 3D data from BossDB in no time? You're in the right place.

There is a video version of this tutorial available [here](https://www.youtube.com/watch?v=gic1O3AM3Iw).

### Step 1: Installing \`intern\`

We're going to use the \`intern\` Python package to download publicly available data from BossDB. \`intern\` is an easy-to-use Python package, but it's powerful enough to handle big-data use-cases in the future. If you are installing or importing libraries such as intern, being on a VPN might impact connectivity. Install \`intern\` by typing this into your terminal or shell:

~~~shell
pip install intern
~~~

If you encounter issues with the installation, you can try [these instructions](https://github.com/jhuapl-boss/intern#installation). If you're still encountering issues, please reach out to info@bossdb.org.

### Step 2: Importing intern in a Jupyter Notebook or Python Script

Let's test out our new installation. Open up your favorite Python editor or Notebook, and import \`intern\` with the following:

~~~python
from intern import array
~~~

Good so far? If you encounter any issues importing \`intern\`, confirm your installation is working and that your Python script is running inside of the same virtual environment as your intern installation. If you're still encountering issues, please reach out to info@bossdb.org, and we'll be happy to help!

### Step 3: Downloading Data

Let's select a public dataset to check out. All of the projects at [bossdb.org/projects](https://bossdb.org/projects) are publicly available and free to download, so grab one you like, or follow along as we download from [Kuan & Phelps et al](http://localhost:8080/project/kuan_phelps2020).

On the project page that we selected, we've automatically generated some Python code to help you get started downloading from this dataset:

~~~python
from intern import array

# Save a cutout to a numpy array in ZYX order:
bossdb_dataset = array("bossdb://kuan_phelps2020/drosophila_brain_120nm/drBrain_120nm_rec")
my_cutout = bossdb_dataset[50:60, 1000:1500, 1000:1500]
~~~

You can simply copy and paste that code into your Python session. \`intern\` will fetch the data from (Z,Y,X) coordinates z=(50-60), y=(1000-1500), x=(1000-1500) and return a [numpy array](https://numpy.org/doc/stable/reference/generated/numpy.array.html) containing your cutout data. You can treat the \`bossdb_dataset\` variable like one enormous numpy array as well:

~~~python
print(bossdb_dataset.shape)
~~~

You can learn more about the details of the \`array\` function [here](https://github.com/jhuapl-boss/intern/wiki/Using-the-intern.array-API).

### BONUS STEP! Data Visualization

Let's visualize a slice of the data that we just downloaded using matplotlib (\`pip install matplotlib\`):

~~~python
import matplotlib.pyplot as plt

plt.imshow(my_cutout[5])
~~~

This should render the 5th Z-slice of the cutout that you just downloaded in the previous step.

Ready to dive in more? Check out some BossDB project management tutorials [here](https://github.com/jhuapl-boss/intern/wiki/Boss-Tutorials), or find some more video tutorials [here](https://www.youtube.com/channel/UCOKBtUhLgr-AtfGUxA-K6lg).

`;

export default {
    data() {
        let converter = new showdown.Converter({
            extensions: [showdownHighlight],
            simplifiedAutoLink: true,
            tables: true,
        });
        let markdownParagraphs = [fiveMinutes].map((i) =>
            converter.makeHtml(i)
        );
        return {
            markdownParagraphs,
            tutorialVideos,
        };
    },
};
</script>


<style lang="scss">
.css-hero {
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    min-height: 50vh;
}

.section {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
}

h1 {
    padding-bottom: 0.2em;
}

.left {
    flex: 10%;
}

.right {
    flex: 100%;
    display: flex;
    align-items: center;
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
