import apisauce from 'apisauce';
import {ApiLink} from '../../constant/ApiConstants';

const ApiInstance = apisauce.create({
  baseURL: ApiLink,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default ApiInstance;
