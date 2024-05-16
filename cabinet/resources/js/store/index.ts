import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReucer';
 

// Створення магазину Redux
const store = configureStore({
  reducer: rootReducer,
});

export default store;
