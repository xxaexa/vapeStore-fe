import { createSlice } from "@reduxjs/toolkit";

interface IToggleState {
  sidebar: boolean;
}

const initialState: IToggleState = {
  sidebar: false,
};

export const toggleSlice = createSlice({
  initialState,
  name: "toggleSlice",
  reducers: {
    toggleSidebar: (state) => {
      state.sidebar = !state.sidebar;
    },
    toggleFalse: (state) => {
      state.sidebar = false;
    },
  },
});

export default toggleSlice.reducer;

export const { toggleSidebar, toggleFalse } = toggleSlice.actions;
