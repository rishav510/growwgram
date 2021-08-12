import axios from 'axios';

const unsplash = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 8pSoXHrTXCPo9nTwA3KYJoW0tIq_9jsJRKYb81w5bFQ",
  }
})

export default unsplash;
