<template>
    <div class="entry">
        <label v-if="label">{{ label }}</label>
        <BaseRadio
            v-for="option in options"
            :key="option.value"
            :label="option.label"
            :value="option.value"
            :model-value="modelValue"
            :name="name"
            @update:model-value="$emit('update:modelValue', $event)"
        />
    </div>
</template>

<script>
import BaseRadio from "./BaseRadio.vue";

export default {
    name: "BaseRadioGroup",
    components: {
        BaseRadio
    },
    props: {
        label: {
            type: String,
            required: true
        },
        options: {
            type: Array,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        modelValue: {
            type: [String, Number],
            default: ""
        }
    },
    emits: ["update:modelValue"]
};
</script>
