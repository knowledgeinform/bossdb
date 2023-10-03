<template>
    <div>
        <div class="container">
            <div class="section">
                <div class="columns">
                    <div class="column is-6">
                        <div>
                            <h1
                                class="title has-text-link has-text-centered very-big-text"
                            >
                                404 :(
                            </h1>
                            <p class="has-text-centered is-size-3">
                                We couldn't find anything at this URL.
                            </p>
                            <br />
                            <p class="has-text-centered is-size-5">
                                If you are looking for a dataset, try the
                                <router-link to="/projects"
                                    >Project Listing</router-link
                                >.
                            </p>
                            <br />
                            <p class="has-text-centered is-size-5">
                                If you think something is missing,<br />please
                                <a href="mailto:info@bossdb.org"
                                    >shoot us a message</a
                                >.
                            </p>
                        </div>
                    </div>
                    <div class="column">
                        <img
                            :src="require('@/assets/404.png')"
                            alt="BossDB cannot find the requested page."
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.very-big-text {
    font-size: 12em;
}
</style>