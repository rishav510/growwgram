import axios from 'axios';


const unsplash = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID HvLlpyUVPn2kwTz7d8mc0ZUYYWf36U6aa2CPIqEuxy0",
  }
})

export default unsplash;
