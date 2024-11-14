import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// store/slices/headerSlice.ts
interface HeaderState {
  notificationsCount: number;
}

const initialState: HeaderState = {
  notificationsCount: 0
};

const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    setNotificationsCount: (state, action: PayloadAction<number>) => {
      state.notificationsCount = action.payload;
    }
  }
});

export const { setNotificationsCount } = headerSlice.actions;
export default headerSlice.reducer;