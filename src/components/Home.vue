<template>
    <div>
        <div class="hero">
            <div class="container">
                <section class="section">
                    <div class="columns">
                        <div class="column is-5 is-hidden-mobile">
                            <Logo />
                        </div>
                        <div class="column">
                            <div>
                                <h1 class>
                                    <span class="is-hidden-tablet">
                                        <Logo width="4em" />&nbsp;
                                    </span>
                                    <Typemark size="4.5em" />
                                </h1>
                                <h2 class="subtitle">
                                    Brain Observatory Storage Service & Database
                                </h2>
                                <hr />
                                <p class>
                                    BossDB is a volumetric database for 3D and
                                    4D neuroscience data, focused on Electron 
                                    Microscopy and X-ray Micro/Nano Tomography.
                                    <br /> <br />
                                    Store petabytes of high-dimensional
                                    data faster and bigger.
                                </p>

                                <br />
                                <div class="field is-hidden-tablet">
                                    <p class="control">
                                        <router-link
                                            to="/projects"
                                            class="
                                                button
                                                is-primary is-fullwidth is-large
                                            "
                                            color="green">
                                            <span class="icon">
                                                <i class="fas fa-database"></i>
                                            </span>
                                            <span>Browse Public Data</span>
                                        </router-link>
                                    </p>
                                </div>
                                <div class="field has-addons is-hidden-mobile">
                                    <p class="control">
                                        <router-link
                                            to="/projects"
                                            class="button is-warning"
                                            color="green">
                                            <span class="icon is-small">
                                                <i class="fas fa-database"></i>
                                            </span>
                                            <span>Browse Public Data</span>
                                        </router-link>
                                    </p>
                                    <p class="control">
                                        <router-link
                                            to="/get-started"
                                            color="green"
                                            class="button is-primary">
                                            <span class="icon is-small">
                                                <i class="fas fa-book"></i>
                                            </span>
                                            <span>Get Started with Python</span>
                                        </router-link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <section
                class="section"
                :style="{
                    backgroundImage:
                        'url(' + require('@/assets/hero.jpg') + ')',
                }">
                <div
                    style="
                        right: 16px;
                        position: absolute;
                        font-size: 0.9em;
                        font-weight: bold;
                        float: right;
                    ">
                    <a
                        href="https://bossdb.org/project/bock2011"
                        style="color: white !important">
                        <i>Mouse V1.</i> Davi Bock et al 2011
                    </a>
                </div>
                <div class="columns">
                    <div class="column"></div>
                </div>
                <div class="columns">
                    <div class="column is-4-tablet is-offset-1-tablet">
                        <OpenDataCard />
                        <br />
                        <SyGlassCard />
                        <br />
                    </div>
                    <div class="column is-6-tablet">
                        <EventsCard />
                    </div>
                </div>
            </section>
        </div>

        <FeaturesHero />
    </div>
</template>

<script>
import Typemark from "@/components/Typemark.vue";
import Logo from "@/components/Logo.vue";
import SyGlassCard from "@/components/cards/SyGlassCard.vue";
import EventsCard from "@/components/cards/EventsCard.vue";
import FeaturesHero from "@/components/FeaturesHero.vue";
import OpenDataCard from "@/components/cards/OpenDataCard.vue";

export default {
    name: "Home",

    components: {
        Typemark,
        Logo,
        SyGlassCard,
        EventsCard,
        FeaturesHero,
        OpenDataCard,
    },
};
</script>