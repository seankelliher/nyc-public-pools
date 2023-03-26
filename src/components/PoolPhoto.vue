<template>
    <figure>
        <img
            :src="`/${src}.jpg`"
            :alt="alt"
        >
        <figcaption>{{ caption }}</figcaption>
    </figure>
</template>

<script>
export default {
    name: "PoolPhoto",
    props: {
        src: {
            type: String,
            required: true
        },
        alt: {
            type: String,
            required: true
        },
        caption: {
            type: String,
            required: true
        }
    }
};
</script>
