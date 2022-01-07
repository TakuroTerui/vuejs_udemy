import axios from 'axios';

const instance = axios.create({
  baseURL : 'https://firestore.googleapis.com/v1/projects/vuejs-http-514f5/databases/(default)/documents'
});

export default instance;