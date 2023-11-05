import * as user from "./users";
import * as banner from "./banner";

export const reducer = {
  users: user.reducer,
  banner: banner.reducer,
};

export const actions = {
  users: { ...user.actions },
  banner: { ...banner.actions },
};

export const middlewares = [...user.middlewares];
