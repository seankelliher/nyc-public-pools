<template>
    <section>
        <div class="summary">
            <h2>Ideas and Errors</h2>
            <p>
                Thank you for submitting your ideas or letting us know about
                errors on this site. You can also check our
                <a href="ideas-errors-log">Ideas and Errors log</a> to see what
                other have submitted.
                <span class="highlight">
                    Your email address will not be published.
                </span>
            </p>
        </div>
        <form @submit.prevent="sendForm">
            <BaseInput
                v-model="message.name"
                label="Name"
                placeholder="Maria Vargas"
                type="text"
            />
            <BaseInput
                v-model="message.emailAddress"
                label="Email Address"
                placeholder="maria123@aol.com"
                type="text"
            />
            <BaseSelect
                :options="boroughs"
                v-model="message.borough"
                label="Borough"
            />
            <BaseInput label="Pool Name" placeholder="Asser Levy Pool" />
            <BaseInput label="Pool Type" placeholder="Outdoor Wading Pool" />
            <BaseRadioGroup
                label="This is an..."
                v-model="message.type"
                name="Message Type"
                :options="messageType"
            />
            <BaseTextArea
                v-model="message.myMessage"
                label="Message"
                placeholder="I want to suggest..."
                rows="6"
            />
            <button type="submit">Submit</button>
        </form>
        <pre>{{ message }}</pre>
    </section>
</template>

<script>
import axios from "axios";
import BaseInput from "@/components/BaseElements/BaseInput.vue";
import BaseSelect from "@/components/BaseElements/BaseSelect.vue";
import BaseRadioGroup from "@/components/BaseElements/BaseRadioGroup.vue";
import BaseTextArea from "@/components/BaseElements/BaseTextArea.vue";

export default {
    name: "IdeasErrorsForm",
    data() {
        return {
            boroughs: [
                "All or Multiple",
                "Bronx",
                "Brooklyn",
                "Manhattan",
                "Queens",
                "Staten Island",
            ],
            messageType: [
                {
                    label: "Idea",
                    value: 0,
                },
                {
                    label: "Error",
                    value: 1,
                },
            ],
            message: {
                name: "",
                emailAddress: "",
                borough: "",
                type: 0,
            },
        };
    },
    components: {
        BaseInput,
        BaseSelect,
        BaseRadioGroup,
        BaseTextArea,
    },
    methods: {
        sendForm() {
            axios
                .post(
                    "https://my-json-server.typicode.com/seankelliher/nyc-public-pools/messages",
                    this.message
                )
                .then(function (response) {
                    console.log("Response", response);
                })
                .catch(function (err) {
                    console.log("Error", err);
                });
        },
    },
};
</script>
