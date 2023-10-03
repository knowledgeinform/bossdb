<template>
    <img
        v-tooltip="'This dataset has a derived connectome graph.'"
        :src="connectomeIcon"
        :style="`height: ${height}`"
        v-on:click="onclick()"        
    />
</template>

<script lang="ts">
import Vue from "vue";
import connectomeIcon from "@/assets/datatypes/connectome.png";
export default Vue.extend({
    props: {
        height: {
            type: String,
            default: "2em"
        },
        onclick: {
            type: Function
        }
    },
    data() {
        return {
            connectomeIcon,
        };
    },
});
</script>