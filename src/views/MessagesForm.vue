<template>
    <section>
        <PageTitle name="Send a Message" />
        <div class="summary">
            <p>
                Thank you for submitting your ideas or letting us know about
                errors on this site. To see what other have already submitted,
                check our <a href="messages-log">Messages Log</a>.
            </p>
            <p><strong>Your email address will not be published.</strong></p>
        </div>
        <form @submit="submit">
            <BaseInput
                label="Name"
                v-model="name"
                placeholder="Maria Vargas"
                type="text"
                :error="errors.name"
            />
            <BaseInput
                label="Email"
                v-model="email"
                placeholder="maria123@aol.com"
                type="email"
                :error="errors.email"
            />
            <BaseSelect
                label="Borough"
                v-model="borough"
                :options="boroughs"
                :error="errors.borough"
            />
            <BaseInput
                label="Pool Name"
                v-model="poolName"
                placeholder="Asser Levy Pool"
                type="text"
                :error="errors.poolName"
            />
            <BaseInput
                label="Pool Type"
                v-model="poolType"
                placeholder="Outdoor Wading Pool"
                type="text"
                :error="errors.poolType"
            />
            <BaseRadioGroup
                label="What best describes you?"
                v-model="resident"
                name="resident"
                :options="[
                    { value: 0, label: 'I am a NYC resident.' },
                    { value: 1, label: 'I am visiting NYC.' },
                ]"
            />
            <BaseTextArea
                label="Description"
                v-model="description"
                placeholder="I am writing to..."
                rows="4"
                :error="errors.description"
            />
            <button type="submit" class="regular">Submit</button>
            <span id="flash-msg-form" class="flash">placeholder</span>
        </form>
    </section>
</template>

<script>
import PageTitle from "@/components/PageTitle.vue";
import BaseInput from "@/components/BaseElements/BaseInput.vue";
import BaseSelect from "@/components/BaseElements/BaseSelect.vue";
import BaseRadioGroup from "@/components/BaseElements/BaseRadioGroup.vue";
import BaseTextArea from "@/components/BaseElements/BaseTextArea.vue";
import { useForm, useField } from "vee-validate";
import { object, string } from "yup";

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
        };
    },
    components: {
        PageTitle,
        BaseInput,
        BaseSelect,
        BaseRadioGroup,
        BaseTextArea,
    },
    setup() {
        const simpleSchema = object({
            name: string().required().label("Name"),
            email: string().required().email().label("Email"),
            borough: string().required().label("Borough"),
            poolName: string(),
            poolType: string(),
            description: string().required().label("Description"),
        });

        useForm({
            validationSchema: simpleSchema,
        });

        const { handleSubmit, errors } = useForm({
            validationSchema: simpleSchema,
            initialValues: {
                resident: 0,
            },
        });

        const { value: name } = useField("name");
        const { value: email } = useField("email");
        const { value: borough } = useField("borough");
        const { value: poolName } = useField("poolName");
        const { value: poolType } = useField("poolType");
        const { value: resident } = useField("resident");
        const { value: description } = useField("description");

        const submit = handleSubmit((value, { resetForm }) => {
            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(value),
            };

            function addRemoveFlash(txt, color) {
                const sent = document.getElementById("flash-msg-form");
                sent.classList.add("flash-msg");
                sent.style.display = "inline"; //CHECK! MAYBE REVISE!
                sent.textContent = txt;
                sent.classList.add(color);
            }

            fetch("http://localhost:3000/messages", options)
                .then((response) => {
                    if (response.ok) {
                        addRemoveFlash("Message sent!", "compliment");
                    } else {
                        return Promise.reject(response.status);
                    }
                })
                .catch((err) => {
                    addRemoveFlash(
                        `Server error ${err}. Please try again later.`,
                        "warn"
                    );
                });
            resetForm();
        });

        return {
            name,
            email,
            borough,
            poolName,
            poolType,
            resident,
            description,
            errors,
            handleSubmit,
            submit,
        };
    },
};
</script>
