import axios from 'axios';


const unsplash = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID mU4gT4_g5HHESerLMgNg7HWmM5Up3-U3KyqOVSVX9Qk",
  }
})

export default unsplash;
