<template>
    <div class="page-title">
        <h2>{{ name }}</h2>
        <!--<p>
            Year-round indoor and summer outdoor public swimming pools in
            <span v-if="name === 'Bronx'">the</span>
            {{ name }}.
            <span class="highlight">
                Pool dimensions: L x W x D (in feet).
            </span>
        </p>-->
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
