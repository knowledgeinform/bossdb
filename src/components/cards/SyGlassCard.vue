<template>
    <div class="card">
        <div class="card-image">
            <video autoplay muted loop playsinline style="width: 100%">
                <source
                    :src="require('@/assets/SyGlass-BossDB.web.webm')"
                    type="video/webm"
                />
            </video>
        </div>
        <div class="card-content">
            <div class="media">
                <div class="media-content">
                    <p class="title is-4">Explore BossDB in VR</p>
                </div>
            </div>

            <div class="content">
                BossDB has partnered with
                <a href="https://www.syglass.io">SyGlass </a>
                to bring BossDB into VR. Explore BossDB datasets like never
                before with your Oculus, Vive, or WMR headsets.
                <br />
                <br />
                <p>
                    <router-link
                        to="/post/syglass-bossdb"
                        class="button is-medium is-pulled-right is-primary"
                    >
                        Read More
                    </router-link>
                </p>
            </div>
        </div>
    </div>
</template>