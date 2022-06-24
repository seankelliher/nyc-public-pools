<template>
    <div class="page-title">
        <Transition
            name="fade-in-slide-left"
            appear
        >
            <h2>{{ name }}</h2>
        </Transition>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true,
        },
    },
};
</script>
