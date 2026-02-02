import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mode: 'dark', // 'dark' or 'light'
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === 'dark' ? 'light' : 'dark';
    },
    setTheme: (state, action) => {
      state.mode = action.payload;
    },
  },
});

// Function to apply theme to document root
export const applyTheme = (mode) => {
  if (typeof document !== 'undefined') {
    const root = document.documentElement;

    if (mode === 'dark') {
      root.setAttribute('data-theme', 'dark');
      root.style.setProperty('--primary-color', '#f97316'); // orange
      root.style.setProperty('--secondary-color', '#22c55e'); // green
      root.style.setProperty('--accent-color', '#ffffff'); // white
      root.style.setProperty('--vibrant-color', '#f97316'); // orange (for accents)
      root.style.setProperty('--neon-color', '#22c55e'); // green (for special elements)
      root.style.setProperty('--bg-color', '#000000'); // black
      root.style.setProperty('--surface-color', '#1a1a1a'); // dark gray
      root.style.setProperty('--text-color', '#ffffff'); // white
      root.style.setProperty('--text-contrast-color', '#cccccc'); // light gray
      root.style.setProperty('--logo-primary', '#f97316'); // orange for logo
      root.style.setProperty('--logo-secondary', '#22c55e'); // green for logo
    } else {
      root.setAttribute('data-theme', 'light');
      root.style.setProperty('--primary-color', '#f97316'); // orange
      root.style.setProperty('--secondary-color', '#22c55e'); // green
      root.style.setProperty('--accent-color', '#000000'); // black
      root.style.setProperty('--vibrant-color', '#f97316'); // orange (for accents)
      root.style.setProperty('--neon-color', '#22c55e'); // green (for special elements)
      root.style.setProperty('--bg-color', '#ffffff'); // white
      root.style.setProperty('--surface-color', '#f8fafc'); // very light gray
      root.style.setProperty('--text-color', '#000000'); // black
      root.style.setProperty('--text-contrast-color', '#64748b'); // medium gray
      root.style.setProperty('--logo-primary', '#f97316'); // orange for logo in light mode
      root.style.setProperty('--logo-secondary', '#22c55e'); // green for logo in light mode
    }
  }
};

export const { toggleTheme, setTheme } = themeSlice.actions;

export default themeSlice.reducer;