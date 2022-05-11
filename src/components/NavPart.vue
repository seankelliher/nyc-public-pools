<template>
    <nav>
        <button @click="goToPage" class="nav" id="btn-bx">
            <router-link to="/bronx">BX</router-link>
        </button>
        <button @click="goToPage" class="nav" id="btn-bk">
            <router-link to="/brooklyn">BK</router-link>
        </button>
        <button @click="goToPage" class="nav" id="btn-mn">
            <router-link to="/manhattan">MN</router-link>
        </button>
        <button @click="goToPage" class="nav" id="btn-qn">
            <router-link to="/queens">QN</router-link>
        </button>
        <button @click="goToPage" class="nav" id="btn-si">
            <router-link to="/staten-island">SI</router-link>
        </button>
    </nav>
</template>

<script>
export default {
    name: "NavPart",
    methods: {
        goToPage(event) {
            if (event.target.id === "btn-bx") {
                this.$router.push("/bronx");
            }
            if (event.target.id === "btn-bk") {
                this.$router.push("/brooklyn");
            }
            if (event.target.id === "btn-mn") {
                this.$router.push("/manhattan");
            }
            if (event.target.id === "btn-qn") {
                this.$router.push("/queens");
            }
            if (event.target.id === "btn-si") {
                this.$router.push("/staten-island");
            }
        },
    },
};
</script>
<!--Note: there is some repetition in the above code. I'll explain.-->
<!--goToPage method & btn IDS make the whole btn (not only txt) clickable.-->
<!--The <router-link> lets us use Vue's ".router-link-exact-active" class.-->
