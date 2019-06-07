import axios from 'axios';

const proxy = 'https://cors-anywhere.herokuapp.com/';
const api = 'https://www.metaweather.com';
const url = proxy + api;

export default axios.create({
  baseURL: url,
});
