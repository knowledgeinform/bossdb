<template>
    <span style="font-size: 1em">
        <img src="@/assets/logo.png" :style="{ width }" />
    </span>
</template>

<script>
export default {
    props: {
        width: { type: Number, default: 52 },
    },
};
</script>