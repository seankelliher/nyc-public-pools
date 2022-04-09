<template>
    <fieldset>
        <legend v-if="label">{{ label }}</legend>
        <BaseRadio
            v-for="option in options"
            :key="option.value"
            :label="option.label"
            :value="option.value"
            :modelValue="modelValue"
            :name="name"
            @update:modelValue="$emit('update:modelValue', $event)"
        />
    </fieldset>
</template>

<script>
import BaseRadio from "@/components/BaseElements/BaseRadio.vue";

export default {
    name: "BaseRadioGroup",
    components: {
        BaseRadio,
    },
    props: {
        label: {
            type: String,
            required: true,
        },
        options: {
            type: Array,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        modelValue: {
            type: [String, Number],
            default: "",
        },
    },
};
</script>
