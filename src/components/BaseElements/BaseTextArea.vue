<template>
    <div class="entry">
        <label
            v-if="label"
            :for="uuid"
        >
            {{ label }}
        </label>
        <textarea
            :id="uuid"
            v-bind="$attrs"
            :placeholder="placeholder"
            :value="modelValue"
            :rows="rows"
            :aria-describeby="error ? `${uuid}-error` : null"
            :aria-invalid="error ? true : null"
            @change="$emit('update:modelValue', $event.target.value)"
        />
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
    name: "BaseTextArea",
    props: {
        label: {
            type: String,
            default: ""
        },
        placeholder: {
            type: String,
            default: ""
        },
        modelValue: {
            type: [String, Number],
            default: ""
        },
        rows: {
            type: String,
            default: ""
        },
        error: {
            type: String,
            default: ""
        }
    },
    emits: ["update:modelValue"],
    setup() {
        const uuid = UniqueID().getID();
        return {
            uuid
        };
    }
};
</script>
