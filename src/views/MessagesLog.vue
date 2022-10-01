<template>
    <section>
        <PageTitle name="Messages Log" />
        <div
            v-for="(message, index) in messages"
            :key="index"
            class="pool"
        >
            <p>
                <strong>{{ message.poolName }}</strong> ({{ message.borough }})
                <br>
                {{ message.poolType }}<br>
                <em>{{ message.description }}</em>
                <br>- submitted by {{ message.name }}.
            </p>
        </div>
        <p id="flash-msg-form">
            placeholder
        </p>
    </section>
</template>

<script>
import PageTitle from "@/components/PageTitle.vue";

export default {
    name: "MessagesLog",
    components: {
        PageTitle,
    },
    data() {
        return {
            messages: [],
        };
    },
    created() {
        function addRemoveFlash(txt, color, structure) {
            const sent = document.getElementById("flash-msg-form");
            sent.classList.add("flash-msg");
            sent.style.display = structure;
            sent.textContent = txt;
            sent.classList.add(color);
        }
        // For local development use http://localhost:4040/
        fetch("/")
            .then((response) => {
                if (response.ok) {
                    console.log(responsetext());
                    return response.text();

                } else {
                    return Promise.reject(response.status);
                }
            })
            .then((data) => {
                this.messages = data.messages;
                //console.log(data);
            })
            .catch((err) => {
                addRemoveFlash(
                    `Server error ${err}. Please try again later.`,
                    "warn",
                    "block",
                );
            });
    },
};
</script>
