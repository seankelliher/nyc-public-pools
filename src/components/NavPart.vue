<template>
    <nav>
        <div
            id="btn-bx"
            class="nav-link"
            @click="goToPage"
        >
            <router-link to="/bronx">
                Bronx
            </router-link>
        </div>
        <div
            id="btn-bk"
            class="nav-link"
            @click="goToPage"
        >
            <router-link to="/brooklyn">
                Brooklyn
            </router-link>
        </div>
        <div
            id="btn-mn"
            class="nav-link"
            @click="goToPage"
        >
            <router-link to="/manhattan">
                Manhattan
            </router-link>
        </div>
        <div
            id="btn-qn"
            class="nav-link"
            @click="goToPage"
        >
            <router-link to="/queens">
                Queens
            </router-link>
        </div>
        <div
            id="btn-si"
            class="nav-link"
            @click="goToPage" 
        >
            <router-link to="/staten-island">
                Staten Island
            </router-link>
        </div>
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
