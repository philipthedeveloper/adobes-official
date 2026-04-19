import { createSlice } from '@reduxjs/toolkit';

const getInitialTheme = (): 'light' | 'dark' => {
  const stored = localStorage.getItem('theme');
  return stored === 'dark' ? 'dark' : 'light';
};

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: getInitialTheme(),
  },
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', state.theme);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;