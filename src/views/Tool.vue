<template>
    <div class="">
        <Tool :tool="tool" />
    </div>
</template>

<script>
import Tool from "@/components/Tool.vue";
import tools from "@/tools.js";

import _ from "lodash";

export default {
    components: {
        Tool
    },

    props: {
        toolName: {
            type: String
        }
    },

    data() {
        return {
            tool: tools.all_tools[this.toolName.toLowerCase()]
        };
    }
};
</script>
