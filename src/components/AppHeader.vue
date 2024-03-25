<script>
import { state } from '/state';


export default {
    name: 'AppHeader',

    data() {
        return { state, }
    },
    methods: { //functions; all kind of manipulations

    },
}
</script>

<template>
    <div class="container">
        <header class="panel">
            <h1>Meteo</h1>
            <img src="../assets/logo.png" alt="logo boolean">
        </header>
    </div>
</template>

<style scoped></style>