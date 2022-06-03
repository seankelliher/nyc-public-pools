<template>
    <section>
        <PageTitle name="Messages Log" />
        <div class="pool" v-for="(message, index) in messages" :key="index">
            <p>
                <strong>{{ message.poolName }}</strong> ({{ message.borough }})
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
        fetch("http://localhost:3000/messages")
            .then((response) => response.json())
            .then((data) => {
                this.messages = data;
            })
            .catch((e) => {
                this.errors.push(e);
            });
    },
};
</script>
