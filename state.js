import { reactive } from 'vue';

export const state = reactive({
    latitude: null,
    longitude: null,
    API_KEY: null,
    units: null,
    lang: null,
    endpoint: null,
    iconCode: null,
    description: null,

    onSuccess(position) {

        // Recupero latitudine e longitudine
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;

        // Prepariamoci a chiamare l'API do Open Weather
        this.API_KEY = 'bd832622acc99b03e95f5648052a97cf';
        this.units = 'metric';
        this.lang = 'it';

        this.endpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=${units}&lang=${lang}`;


        axios.
            get(endpoint)
            .then((response) => {
                this.iconCode = response.data.weather[0].icon;
                this.description = response.data.weather[0].description;
            })
            .catch((error) => {
                console.error('error axios: ', error);
            });

        // Riempio gli elementi della pagina
        weatherLocation.innerText = data.name;
        weatherIcon.alt = description;
        weatherIcon.src = `images/${iconCode}.png`;
        weatherTemperature.innerText = `${Math.floor(data.main.temp)}°`;
        suggestion.innerText = suggestions[iconCode];

        // Disattivare il loading
        htmlElement.className = '';

    }

});