<template>
    <fieldset>
        <legend :for="uuid" v-if="label">{{ label }}</legend>
        <select
            v-bind="{
                ...$attrs,
                onChange: ($event) => {
                    $emit('update:modelValue', $event.target.value);
                },
            }"
            :value="modelValue"
            :id="uuid"
            :aria-describeby="error ? `${uuid}-error` : null"
            :aria-invalid="error ? true : null"
        >
            <option disabled value="">Please select one</option>
            <option
                v-for="option in options"
                :value="option"
                :key="option"
                :selected="option === modelValue"
            >
                {{ option }}
            </option>
        </select>
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
    name: "BaseSelect",
    props: {
        label: {
            type: String,
            default: "",
        },
        modelValue: {
            type: [String, Number],
            default: "",
        },
        options: {
            type: Array,
            required: true,
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
