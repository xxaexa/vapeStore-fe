import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IAmountState {
  amount: number;
}

const initialState: IAmountState = {
  amount: 1,
};

export const amountSlice = createSlice({
  initialState,
  name: "amountSlice",
  reducers: {
    setAmount: (state) => {
      state = initialState;
      return state;
    },
    resetAmount: (state, action: PayloadAction<number>) => {
      state.amount = action.payload;
    },
  },
});

export default amountSlice.reducer;

export const { setAmount, resetAmount } = amountSlice.actions;
