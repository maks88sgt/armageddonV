import axios from "axios";

class AsteroidApi {
    constructor (apiToken) {
        this.apiToken = apiToken ? apiToken : 'DEMO_KEY'
        this.startDate = new Date()
    }

    static BASE_URL = 'https://api.nasa.gov/neo/rest/v1';

    getAsteroids () {
        const year = this.startDate.getFullYear();
        const month = this.startDate.getMonth() + 1;
        const day = this.startDate.getDate();
        return axios.get(`${AsteroidApi.BASE_URL}/feed?start_date=${year}-${month}-${day}&api_key=${this.apiToken}`)
    }
}

const API_TOKEN = 'ecdZUKJOYd6s7PADW1nXOHD5nhEuZefR6o5Sex1m';

export const api = new AsteroidApi(API_TOKEN);


