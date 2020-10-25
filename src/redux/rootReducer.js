import { appReducer } from './appReducer';
import { combineReducers } from 'redux';


export const rootReducer = combineReducers({
  app: appReducer,
});
