<template>
    <component :is="'script'" v-html="jsonld" type="application/ld+json">
    </component>
</template>

<script>
export default {
    props: {
        project: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            jsonld: {
                "@context": "https://schema.org/",
                "@type": "Dataset",
                name: this.project.name,
                description: `Volumetric imagery from ${this.project.name} hosted on BossDB.org`,
                url: `https://bossdb.org/project/${this.project.id}`,
                identifier: [`https://bossdb.org/project/${this.project.id}`],
                keywords: [
                    ...this.project.tags,
                    "volumetric",
                    "dense",
                    "bossdb",
                    "neuroscience",
                    "3D",
                ],
                creator: {
                    "@type": "Organization",
                    url: "https://bossdb.org/",
                    name: "BossDB.org",
                    contactPoint: {
                        "@type": "ContactPoint",
                        contactType: "Support",
                        email: "info@bossdb.org",
                    },
                },

                license: "https://creativecommons.org/licenses/by/4.0/",
                isAccessibleForFree: true,
                includedInDataCatalog: {
                    "@type": "DataCatalog",
                    name: "bossdb.org",
                },
            },
        };
    },
};
</script>