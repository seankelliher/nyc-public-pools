<template>
    <input
        type="radio"
        :checked="modelValue === value"
        :value="value"
        v-bind="$attrs"
        @change="$emit('update:modelValue', value)"
    />
    <label v-if="label">{{ label }}</label>
</template>

<script>
export default {
    name: "BaseRadio",
    props: {
        label: {
            type: String,
            default: "",
        },
        modelValue: {
            type: [String, Number],
            default: "",
        },
        value: {
            type: [String, Number],
            required: true,
        },
    },
};
</script>

<style scoped>
input {
    width: 10%;
    margin: 0;
    padding: 0;
    float: left;
}

label {
    width: 40%;
    margin: 0;
    padding: 0;
    float: left;
    font-size: 16;
    font-weight: 400;
}
</style>
