import axios from 'axios';


const unsplash = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 9nsSFyDSQ84cUpfpwm6ioojN2fNS5YK6Jq3CIEYemNM",
  }
})

export default unsplash;
