<template>
    <section
        class="hero is-dark"
        :style="`height: 100%;
             background-image:url(${require('@/assets/header_footer.png')});
             background-repeat: no-repeat;
             background-size: cover
            `">
        <div class="hero-body">
            <div class="container">
                <small class="is-pulled-right has-text-right">
                    <a class="has-text-white" href="https://www.jhuapl.edu/">
                        Made with ♥ at
                        <img
                            src="https://github.com/aplbrain/colocar/raw/3cf38b1c73aeacd655ead0419a2dd619422ea413/apl-logo.png"
                            style="
                                height: 1.5em;
                                filter: brightness(0) invert(1);
                                vertical-align: middle;
                            " />
                    </a>
                    <br />
                    <router-link class="has-text-white" to="/post/open-data"
                        >Open Data Hosting
                    </router-link>
                    |
                    <a class="has-text-white" href="https://bossdb.org/privacy"
                        >Privacy Policy</a
                    >
                    |
                    <a class="has-text-white" href="https://bossdb.org/tos"
                        >Terms of Service</a
                    >
                    |
                    <a class="has-text-white" href="https://www.jhuapl.edu"
                        >APL Home</a
                    >
                    <br />&copy; 2022 JHU|APL. All rights reserved.
                </small>
                <div class="subtitle">
                    <a
                        class="has-text-white"
                        target="_blank"
                        href="https://github.com/jhuapl-boss/boss/">
                        <span class="icon is-medium">
                            <i
                                class="
                                    fab
                                    fa-github fa-lg
                                    hoverable-link-icon
                                "></i>
                        </span>
                    </a>
                    &nbsp;
                    <a
                        class="has-text-white"
                        target="_blank"
                        href="https://twitter.com/theBossDB/">
                        <span class="icon is-medium">
                            <i
                                class="
                                    fab
                                    fa-twitter fa-lg
                                    hoverable-link-icon
                                "></i>
                        </span>
                    </a>
                    &nbsp;
                    <a
                        class="has-text-white"
                        target="_blank"
                        href="https://join.slack.com/t/connectomes/shared_invite/zt-4rrg62x3-34HPJTwv5HxDQE3rJabdZA">
                        <span class="icon is-medium">
                            <i
                                class="
                                    fab
                                    fa-slack fa-lg
                                    hoverable-link-icon
                                "></i>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>
