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
        <p id="flash-msg-form">placeholder</p>
    </section>
</template>

<script>
import PageTitle from "@/components/PageTitle.vue";

export default {
    name: "MessagesLog",
    data() {
        return {
            messages: [],
        };
    },
    components: {
        PageTitle,
    },
    created() {
        function addRemoveFlash(txt, color) {
            const sent = document.getElementById("flash-msg-form");
            sent.classList.add("flash-msg");
            sent.style.display = "block"; //CHECK! MAYBE REVISE!
            sent.textContent = txt;
            sent.classList.add(color);
        }

        fetch("http://localhost:3000/messages")
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    return Promise.reject(response.status);
                }
            })
            .then((data) => {
                this.messages = data;
            })
            .catch((err) => {
                addRemoveFlash(
                    `Server error ${err}. Please try again later.`,
                    "warn"
                );
            });
    },
};
</script>
