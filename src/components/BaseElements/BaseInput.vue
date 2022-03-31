<template>
    <label :for="uuid" v-if="label">{{ label }}</label>
    <input
        v-bind="$attrs"
        :placeholder="placeholder"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :id="uuid"
    />
</template>

<script>
import UniqueID from "@/features/UniqueID.js";

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
    },
    setup() {
        const uuid = UniqueID().getID();
        return {
            uuid,
        };
    },
};
</script>
