import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UiState {
  isSideMenuOpen: boolean;
  currentSection: 'main' | 'chat' | 'challenges' | 'liveStream' |'search' | 'trending' | 'notification' | 'settings' | 'statistics' | 'collections' | 'friends' | 'gallery' | 'profile' | 'friendsPost' | 'mediaPost';
}

const initialState: UiState = {
  isSideMenuOpen: false,
  currentSection: 'main'
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setCurrentSection: (state, action: PayloadAction<UiState['currentSection']>) => {
      state.currentSection = action.payload;
    },
    toggleSideMenu: (state) => {
      state.isSideMenuOpen = !state.isSideMenuOpen;
    },
  },
});

export const { toggleSideMenu, setCurrentSection } = uiSlice.actions;
export default uiSlice.reducer;