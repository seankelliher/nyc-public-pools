<template>
    <section>
        <PageTitle name="Send a Message" />
        <div class="summary">
            <p>
                Thank you for submitting your ideas or letting us know about
                errors on this site. To see what other have already submitted,
                check our <a href="messages-log">Messages Log</a>.
            </p>
            <p>
                <span class="highlight">
                    Your email address will not be published.
                </span>
            </p>
        </div>
        <form @submit.prevent="sendForm">
            <BaseInput
                label="Name"
                v-model="message.name"
                placeholder="Maria Vargas"
                type="text"
            />
            <BaseInput
                label="Email"
                v-model="message.email"
                placeholder="maria123@aol.com"
                type="email"
            />
            <BaseSelect
                label="Borough"
                v-model="message.borough"
                :options="boroughs"
            />
            <BaseInput
                label="Pool Name"
                v-model="message.poolName"
                placeholder="Asser Levy Pool"
                type="text"
            />
            <BaseInput
                label="Pool Type"
                v-model="message.poolType"
                placeholder="Outdoor Wading Pool"
                type="text"
            />
            <BaseRadioGroup
                label="What best describes you?"
                v-model="message.resident"
                name="resident"
                :options="resident"
            />
            <BaseTextArea
                label="Description"
                v-model="message.description"
                placeholder="I am writing to..."
                rows="4"
            />
            <button type="submit">Submit</button>
        </form>
        <pre>{{ message }}</pre>
    </section>
</template>

<script>
import axios from "axios";
import PageTitle from "@/components/PageTitle.vue";
import BaseInput from "@/components/BaseElements/BaseInput.vue";
import BaseSelect from "@/components/BaseElements/BaseSelect.vue";
import BaseRadioGroup from "@/components/BaseElements/BaseRadioGroup.vue";
import BaseTextArea from "@/components/BaseElements/BaseTextArea.vue";

export default {
    name: "MessagesForm",
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
            resident: [
                {
                    label: "I am a NYC resident.",
                    value: 0,
                },
                {
                    label: "I am visiting NYC.",
                    value: 1,
                },
            ],
            message: {
                name: "",
                email: "",
                borough: "",
                poolName: "",
                poolType: "",
                resident: 0,
                description: "",
            },
        };
    },
    components: {
        PageTitle,
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
