import { combineReducers } from '@reduxjs/toolkit';
import CurrentUserReducer from './slices/CurrentUser';

const rootReducer = combineReducers({CurrentUserReducer})
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>