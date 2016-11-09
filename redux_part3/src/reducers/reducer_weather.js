import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_WEATHER:
      // return state.concat([action.payload.data]);
      // use concat() so that we return a new instance of state
      // or use ES6 syntax
      return [ action.payload.data, ...state ]; // creates a newly flattened array
  }

  return state;
}
