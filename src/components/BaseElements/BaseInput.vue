<template>
    <fieldset>
        <label :for="uuid" v-if="label">{{ label }}</label>
        <input
            v-bind="$attrs"
            :placeholder="placeholder"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            :id="uuid"
            :aria-describeby="error ? `${uuid}-error` : null"
            :aria-invalid="error ? true : null"
        />
        <div
            v-if="error"
            class="error-msg"
            :id="`${uuid}-error`"
            :aria-live="assertive"
        >
            <p class="warn">{{ error }}</p>
        </div>
    </fieldset>
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
        error: {
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
