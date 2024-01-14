import { createSlice } from "@reduxjs/toolkit";

interface IToggleState {
  sidebar: boolean;
  modal: boolean;
}

const initialState: IToggleState = {
  sidebar: false,
  modal: false,
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
    toggleModal: (state) => {
      state.modal = !state.modal;
    },
  },
});

export default toggleSlice.reducer;

export const { toggleSidebar, toggleFalse, toggleModal } = toggleSlice.actions;
