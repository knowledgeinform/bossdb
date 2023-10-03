<template>
    <div class="container" style="min-height: 85vh">
        <div class="columns">
            <div class="column is-8 is-offset-2">
                <br />
                <div class="card">
                    <div class="card-image">
                        <video
                            autoplay
                            muted
                            loop
                            playsinline
                            style="width: 100%"
                        >
                            <source
                                :src="
                                    require('@/assets/SyGlass-BossDB.web.webm')
                                "
                                type="video/webm"
                            />
                        </video>
                    </div>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content">
                                <h1 class="title is-1">SyGlass meets BossDB</h1>
                                <p class="subtitle is-6">February 1, 2020</p>
                                <!-- tags: -->
                                <p class="subtitle is-6">
                                    <span class="tag is-primary">#SyGlass</span
                                    >&nbsp;
                                    <span class="tag is-primary"
                                        >#Virtual-Reality</span
                                    >&nbsp;
                                    <span class="tag is-primary"
                                        >#Visualization</span
                                    >&nbsp;
                                    <span class="tag is-primary"
                                        >#BossDB-Partners</span
                                    >&nbsp;
                                </p>

                                <hr />
                            </div>
                        </div>
                        <div class="content">
                            <p>
                                Starting in early 2020, BossDB has partnered
                                with
                                <a href="https://www.syglass.io">syGlass</a> to
                                bring BossDB datasets to VR. Oculus, Vive, and
                                WMR headsets are supported, and you can explore
                                data using the syGlass software even if you
                                don't have a headset.
                            </p>
                            <p>
                                The free version of syGlass enables you to
                                annotate, explore, and visualize data in an
                                immersive environment. To get started with
                                BossDB data, click through to
                                <a href="https://www.syglass.io/view"
                                    >syglass.io/view</a
                                >.
                            </p>
                            <p>
                                The data shown in the video above is from
                                <i>
                                    <router-link to="/project/kuan_phelps2020">
                                        Kuan Phelps et al., 2020
                                    </router-link> </i
                                >.
                            </p>
                            <p>
                                <router-link
                                    to="/project/kuan_phelps2020"
                                    class="
                                        button
                                        is-medium is-pulled-right is-primary
                                    "
                                >
                                    Kuan Phelps et al., 2020 on BossDB.org
                                </router-link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="columns">
            <div class="column is-8 is-offset-2">
                <hr />
                <p class=""></p>
            </div>
        </div>
    </div>
</template>