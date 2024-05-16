import { UserProfile } from '@/types';
import { PayloadAction, configureStore } from '@reduxjs/toolkit';

// Початковий стан
const initialState = {
  user: {
    id: 0,
    name: '',
    email: ''
  }
};

// Редюсер
const rootReducer = (state = initialState, action: PayloadAction<UserProfile>) => {
  switch (action.type) {
    case 'SET_USER':
      console.log('Action payload:', action.payload);
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

// Створення Redux store
const store = configureStore({
  reducer: rootReducer,
});

export default store;

