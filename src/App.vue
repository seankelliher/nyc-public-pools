<template>
    <header>
        <h1>NYC Public Pools</h1>
        <!--<p>Public swimming pools wihin the five boroughs of New York City.</p>-->
    </header>
    <nav>
        <button><router-link to="/">Home</router-link></button>
        <button><router-link to="/bronx">BX</router-link></button>
        <button><router-link to="/brooklyn">BK</router-link></button>
        <button><router-link to="/manhattan">MN</router-link></button>
        <button><router-link to="/queens">QN</router-link></button>
        <button>
            <router-link to="/staten-island">SI</router-link>
        </button>
    </nav>
    <router-view />
</template>

<style>
@import "./assets/style.css";
</style>
