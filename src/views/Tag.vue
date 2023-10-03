<template>
    <Tag :tag="tag" />
</template>

<script>
import Tag from "@/components/Tag.vue";

export default {
    components: {
        Tag
    },

    props: {
        tag: {
            type: String
        }
    }
};
</script>
