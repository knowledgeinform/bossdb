<template>
    <span :style="'font-size: ' + this.size">
        <span style="font-size: 0.9em; font-family: 'Crimson Text'; vertical-align:0">Boss</span><span style="font-family: 'Crimson Text'">DB</span>
    </span>
</template>

<script>
export default {
    props: {
        size: {
            type: String,
            default: "1em"
        }
    }
}
</script>

