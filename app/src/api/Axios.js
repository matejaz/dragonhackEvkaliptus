import axios from 'axios';

const instance = axios.create({
    baseURL: "https://dhevkaliptus.herokuapp.com/api/"
})

export default instance;