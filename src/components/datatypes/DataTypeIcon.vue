<template>
    <span :class="{'is-highlighted-border': isSelected}">
      <img
          v-tooltip="`This dataset has ${label}.`"
          :src="icon"
          :style="`height: ${height}`"
          :class="{'icon-image':true, 'is-highlighted-img': isSelected}"
          v-on:click="onclick ? onclick() : () => {}"
      />
    </span>
</template>

<script lang="ts">
import Vue from "vue";
import imageryIcon from "@/assets/datatypes/imagery.png";
import segmentationIcon from "@/assets/datatypes/segmentation.png";
import connectomeIcon from "@/assets/datatypes/connectome.png";
import meshIcon from "@/assets/datatypes/mesh.png";

let icon = null;
let label = null;

export default Vue.extend({
    props: {
        height: {
            type: String,
            default: "2em"
        },
        onclick: {
            type: Function
        },
        isSelected: {
            type: Boolean
        },
        dataType: {
          type: String
        }
    },
    data() {
        switch(this.dataType) {
          case "segmentation":
            icon = segmentationIcon;
            label = "volumetric segmentation";
            break;
          case "connectomics":
            icon = connectomeIcon;
            label = "a derived connectome graph";
            break;
          case "mesh":
            icon = meshIcon;
            label = "volumetric mesh";
            break;
          default:
            icon = imageryIcon;
            label = "volumetric imagery";
        }

        return {
            icon, label
        };
    },
});
</script>

<style lang="scss" scoped>
.icon-image {
  vertical-align: middle;
}

.is-highlighted-img {
    filter: brightness(0.50);
}

.is-highlighted-border {
    display: inline-block !important;
    border: 4px groove mediumaquamarine;  
}

</style>