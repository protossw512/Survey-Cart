import axios from 'axios';
import { FETCH_USER } from './types';

/* if reduxThunk(wried as a middleware) sees we return a function from an action creater, it will
   automatacally grab this function and pass dispatch as an argument
 */
export const fetchUser = () => async dispatch => {
  //only dispatch action only when we get response from api
  const res = await axios.get('api/current_user')
  dispatch({ type: FETCH_USER, payload: res.data });
};

/* Before refactor:
 * export const fetchUser = () => {
 *   return function(dispatch) {
 *     axios.get('api/current_user')
 *          .then(res => dispatch({ type: FETCH_USER, payload: res }));
 *   };
 * };*/

export const handleToken = (token) => async dispatch =>{
  const res = await axios.post('/api/stripe', token);

  dispatch({ type:FETCH_USER, payload:res.data });
};
