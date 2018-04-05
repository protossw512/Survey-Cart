import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => {
  /* if reduxThunk(wried as a middleware) sees we return a function from an action creater, it will
     automatacally grab this function and pass dispatch as an argument
   */
  return function(dispatch) {
    //only dispatch action only when we get response from api
    axios.get('api/current_user')
         .then(res => dispatch({ type: FETCH_USER, payload: res }));
  };
};
