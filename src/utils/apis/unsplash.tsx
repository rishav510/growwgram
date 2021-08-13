import axios from 'axios';

const unsplash = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID wAGtja3bsUpFnXBmQRRG9j7T47OQrL5XwBdhKOvdzHk",
  }
})

export default unsplash;
