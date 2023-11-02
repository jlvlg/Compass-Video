import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  sessionId?: string;
} = {
  sessionId: undefined,
};

const usersSlice = createSlice({ name: "users", initialState, reducers: {} });

export const usersActions = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
