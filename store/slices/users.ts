import { createListenerMiddleware, createSlice } from "@reduxjs/toolkit";
import { StartListening } from "..";

const initialState: {
  sessionId?: string | null;
} = {
  sessionId: undefined,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.sessionId = payload;
    },
  },
});

export const actions = usersSlice.actions;
export const reducer = usersSlice.reducer;

const loginMiddleware = createListenerMiddleware();
(loginMiddleware.startListening as StartListening)({
  actionCreator: actions.login,
  effect: (effect) => {
    localStorage.setItem("sessionId", effect.payload);
  },
});

export const middlewares = [loginMiddleware.middleware];
