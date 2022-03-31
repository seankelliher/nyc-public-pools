<template>
    <label :for="uuid" v-if="label">{{ label }}</label>
    <textarea
        v-bind="$attrs"
        v-bind:placeholder="placeholder"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        v-bind:rows="rows"
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
        rows: {
            type: String,
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
