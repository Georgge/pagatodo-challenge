import axios from 'axios';

export const getBanksList = () => axios('https://api.myjson.com/bins/19e11s')
  .then(({ data }) => data);