import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import uiReducer from './slices/uiSlice';
import postsReducer from './slices/postsSlice';
import headerReducer from './slices/headerSlice';
const rootReducer = combineReducers({
  user: userReducer,
  ui: uiReducer,
  posts: postsReducer,
  header: headerReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
