import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICategoryState {
  category: string;
}

const initialState: ICategoryState = {
  category: "",
};

export const categorySlice = createSlice({
  initialState,
  name: "categorySlice",
  reducers: {
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    resetCategory: (state) => {
      state = initialState;
      return state;
    },
  },
});

export default categorySlice.reducer;

export const { setCategory, resetCategory } = categorySlice.actions;
