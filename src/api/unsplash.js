import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID c60b4ae796548d50996f3a8704021f731faf917d162311cbf84b6399014fdf5d' ,
  }
})
