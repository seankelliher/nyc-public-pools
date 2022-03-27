<template>
    <nav>
        <!--<button class="nav"><router-link to="/">Home</router-link></button>-->
        <button class="nav"><router-link to="/bronx">BX</router-link></button>
        <button class="nav">
            <router-link to="/brooklyn">BK</router-link>
        </button>
        <button class="nav">
            <router-link to="/manhattan">MN</router-link>
        </button>
        <button class="nav"><router-link to="/queens">QN</router-link></button>
        <button class="nav">
            <router-link to="/staten-island">SI</router-link>
        </button>
    </nav>
</template>

<script>
export default {
    name: "NavPart",
};
</script>
