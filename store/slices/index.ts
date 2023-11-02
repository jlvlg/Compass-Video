import { usersReducer, usersActions } from "./users";

export const reducer = {
  users: usersReducer,
};

export const actions = {
  users: { ...usersActions },
};
