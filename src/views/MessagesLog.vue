<template>
    <section>
        <PageTitle name="Messages Log" />
        <div class="pool" v-for="(message, index) in messages" :key="index">
            <p>
                <strong>{{ message.poolName }}</strong>
                <br />
                {{ message.poolType }}<br />
                <em>{{ message.description }}</em>
                <br />- submitted by {{ message.name }}.
            </p>
        </div>
        <div class="summary" v-if="errors && errors.length">
            <p v-for="(error, index) in errors" :key="index">
                {{ error.message }}
            </p>
        </div>
    </section>
</template>

<script>
import PageTitle from "@/components/PageTitle.vue";
import axios from "axios";

export default {
    name: "MessagesLog",
    data() {
        return {
            messages: [],
            errors: [],
        };
    },
    components: {
        PageTitle,
    },
    created() {
        axios
            .get(
                "https://my-json-server.typicode.com/seankelliher/nyc-public-pools/messages"
            )
            .then((response) => {
                // JSON responses are automatically parsed.
                this.messages = response.data;
            })
            .catch((e) => {
                this.errors.push(e);
            });
    },
};
</script>
