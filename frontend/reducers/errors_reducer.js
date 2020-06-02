import { combineReducers } from 'redux';
import sessionErrorsReducer from './errors_reducers/session_errors_reducer';

export default combineReducers({
  session: sessionErrorsReducer,
})
