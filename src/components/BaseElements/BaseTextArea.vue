<template>
    <label>{{ label }}</label>
    <textarea
        v-bind="$attrs"
        v-bind:placeholder="placeholder"
        class="field"
        :value="modelValue"
        @textarea="$emit('update:modelValue', $event.target.value)"
        v-bind:rows="rows"
    />
</template>

<script>
export default {
    name: "BaseInput",
    props: {
        label: {
            type: String,
            default: "",
        },
        placeholder: {
            type: String,
            default: "",
        },
        modelValue: {
            type: [String, Number],
            default: "",
        },
        rows: {
            type: String,
            default: "",
        },
    },
};
</script>
