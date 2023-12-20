import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../api/types";
import {
  addUserToLocalStorage,
  removeUserFromLocalStorage,
} from "../../utils/localStorage";

interface IUserState {
  user: IUser | null;
}

const initialState: IUserState = {
  user: null,
};

export const userSlice = createSlice({
  initialState,
  name: "userSlice",
  reducers: {
    logout: (state) => {
      state = initialState;
      removeUserFromLocalStorage();
      return state;
    },
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
      addUserToLocalStorage(action.payload);
    },
  },
});

export default userSlice.reducer;

export const { logout, setUser } = userSlice.actions;
