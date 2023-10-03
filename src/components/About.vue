<template>
    <div class="container">
        <div class="section">
            <h1 class="title">About Us</h1>
            <p>
                We are a team of research scientists and engineers who are
                passionate about enabling discovery by reducing the barriers to
                large-scale exploration of cutting-edge neuroscience datasets.
                We've developed a system to help you scalably and securely
                store, share, and process your data in the cloud, called the
                Brain Observatory Storage Service & Database (BossDB), and we
                host datasets, code, and documentation under the Creative
                Commons 4.0 International (CC-BY) license.
            </p>
            <br />
            <p>
                The Brain Observatory Storage Service & Database (BossDB) is a
                scalable cloud-native data ecosystem for storing, accessing, and
                processing multidimensional and volumetric neuroscience
                datasets. The ecosystem makes use of Amazon Web Services
                capabilities that ensure highly available and highly scalable
                endpoints, data caching and load balancing, and durable
                multitier data storage. A well-documented interface and API
                support a suite of tools and software development kit (SDK) to
                allow a user to easily ingest, validate, visualize, and query
                neuroscience data from any data generator, making it possible
                for scientists to discover and share insights on massive
                datasets.
            </p>
            <br />
            <p>
                <strong
                    >This research was enabled by NIH Grant R24MH114785 (PI
                    Brock Wester), NIH Grant 1R24MH114799 (PI Will Gray-Roncal),
                    and by the IARPA MICrONS Program. Amazon Web Services (AWS) provides BossDB with
                    support for storage as a part of the Open Data program.
                </strong>
            </p>
        </div>
        <div style="margin-top: 0px; margin-left: 30px; margin-bottom: 30px">
            <h1 class="title">The Team</h1>
            <p>
                BossDB is open-source and we welcome new contributors. Reach out
                if you want to contribute!
            </p>
            <br>
            <h2 class="title is-4">Current Members</h2>
        </div>
        <div align="center">
            <div class="columns is-multiline is-mobile">
                <div
                    class="column is-3-tablet is-half-mobile"
                    v-for="(t_member, i) in team_member"
                    :key="i">
                    <img
                        :src="t_member.hero"
                        :alt="t_member.name"
                        style="
                            width: auto;
                            margin: auto;
                            border-radius: 50%;
                            width: 30%;
                        " />
                    <p>
                        <strong>{{ t_member.name }}</strong>
                    </p>
                </div>
            </div>
            <div></div>
        </div>
        <div style="margin-top: 0px; margin-left: 30px; margin-bottom: 30px">
            <h2 class="title is-4">Former Members</h2>
        </div>
        
        <div align="center">
            <div class="columns is-multiline is-mobile">
                <div
                    class="column is-3-tablet is-half-mobile"
                    v-for="(t_member, i) in former_member"
                    :key="i">
                    <img
                        :src="t_member.hero"
                        :alt="t_member.name"
                        style="
                            width: auto;
                            margin: auto;
                            border-radius: 50%;
                            width: 30%;
                        " />
                    <p>
                        <strong>{{ t_member.name }}</strong>
                    </p>
                </div>
            </div>
            <div></div>
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
import member from "@/team.js";
import _ from "lodash";

export default {
    data() {
        return {
            team_member: _.sortBy(_.filter(member.team_member, "public")),
            former_member: _.sortBy(_.filter(member.former_member, "public")),
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
</style>
