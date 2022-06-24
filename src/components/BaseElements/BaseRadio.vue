<template>
    <input
        :id="uuid"
        type="radio"
        :checked="modelValue === value"
        :value="value"
        v-bind="$attrs"
        @change="$emit('update:modelValue', value)"
    >
    <label
        v-if="label"
        :for="uuid"
    >
        {{ label }}
    </label>
</template>

<script>
import UniqueID from "@/features/UniqueID.js";

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
    emits: ["update:modelValue"],
    setup() {
        const uuid = UniqueID().getID();
        return {
            uuid,
        };
    },
};
</script>
