import * as user from "./users";

export const reducer = {
  users: user.reducer,
};

export const actions = {
  users: { ...user.actions },
};

export const middlewares = [...user.middlewares];
