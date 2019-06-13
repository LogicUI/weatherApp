import axios from 'axios';

export default axios.create({
  baseURL: 'http://api.timezonedb.com/v2.1'
});
