<template>
    <div class="card">
        <header class="card-header">
            <p class="card-header-title">License</p>
        </header>
        <div class="card-content">
            <p>
                This project is published under the
                <b>
                    <a href="https://creativecommons.org/licenses/by/4.0/"
                        >Creative Commons Attribution 4.0 International Public
                        Licence</a
                    > </b
                >.
            </p>
            <br />
            <p>
                <small>
                    This project's unique access URI is:
                    <br />
                    <a :href="'https://bossdb.org/project/' + project.id">
                        <code>bossdb.org/project/{{ project.id }}</code>
                    </a>
                </small>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "LicenseCard",
    props: {
        project: {
            type: Object,
            required: true,
        },
    },
};
</script>