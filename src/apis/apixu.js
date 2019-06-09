import axios from 'axios';

/**
 * create a new instance for apixu api 
 */
export default axios.create({
  baseURL: 'http://api.apixu.com/v1'
});
