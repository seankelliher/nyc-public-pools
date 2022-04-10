<template>
    <div class="entry">
        <label :for="uuid" v-if="label">{{ label }}</label>
        <textarea
            v-bind="$attrs"
            :placeholder="placeholder"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            :rows="rows"
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
    </div>
</template>

<script>
import UniqueID from "@/features/UniqueID.js";

export default {
    name: "BaseTextArea",
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
