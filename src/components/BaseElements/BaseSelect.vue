<template>
    <div class="entry">
        <label
            v-if="label"
            :for="uuid"
        >
            {{ label }}
        </label>
        <select
            v-bind="{
                ...$attrs,
                onChange: ($event) => {
                    $emit('update:modelValue', $event.target.value);
                },
            }"
            :id="uuid"
            :value="modelValue"
            :aria-describeby="error ? `${uuid}-error` : null"
            :aria-invalid="error ? true : null"
        >
            <option
                disabled
                value=""
            >
                Please select one
            </option>
            <option
                v-for="option in options"
                :key="option"
                :value="option"
                :selected="option === modelValue"
            >
                {{ option }}
            </option>
        </select>
        <div
            v-if="error"
            :id="`${uuid}-error`"
            class="error-msg"
            :aria-live="assertive"
        >
            <p class="warn">
                {{ error }}
            </p>
        </div>
    </div>
</template>

<script>
import UniqueID from "../../features/UniqueID.js";

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
    emits: ["update:modelValue"],
    setup() {
        const uuid = UniqueID().getID();
        return {
            uuid,
        };
    },
};
</script>
