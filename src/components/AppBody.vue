<script>
import { state } from '/state';

export default {
    name: 'AppBody',

    data() { //variables, bool, array, objects and so on

        return {
            state,
            htmlElement: null,
            suggestion: null,
            weatherIcon: null,
            weatherLocation: null,
            weatherTemperature: null,
        }
    },
    methods: {
        // Funzione da eseguire in caso di errore
        onError() {
            // Preparo degli elementi in pagina per far capire che va attivata
            this.weatherLocation.innerText = '';
            this.weatherIcon.alt = "Geolocation disattivata";
            this.weatherIcon.src = "./src/assets/geolocation_disabled.png"; //images/geolocation_disabled.png
            this.suggestion.innerText = 'Attiva la geolocalizzazione'

            // Disattivare il loading
            this.htmlElement.className = '';
        },
    },
    mounted() {
        // Recupero gli elementi di interesse dalla pagina
        this.htmlElement = document.documentElement;
        this.suggestion = document.querySelector('.suggestion');
        this.weatherIcon = document.querySelector('.weather-icon');
        this.weatherLocation = document.querySelector('.weather-location');
        this.weatherTemperature = document.querySelector('.weather-temperature');

        // Provo a recuperare la mia posizione
        navigator.geolocation.getCurrentPosition(state.onSuccess, this.onError());

        state.onSuccess;
    },
}
</script>

<template>
    <div class="container">
        <main>
            <!-- Pannello informazioni meteo -->
            <section class="weather-info panel">
                <div class="weather-location">Calcolo....</div>
                <img src="" alt="" class="weather-icon">
                <div class="weather-temperature"></div>
            </section>

            <!-- Pannello dei suggerimenti -->
            <section class="suggestion panel"></section>
        </main>
    </div>
</template>

<style scoped></style>