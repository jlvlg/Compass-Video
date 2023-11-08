import { actions, useDispatch, useSelector } from "../../store";
import { useEffect } from "react";

export default function useLogin() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(actions.users.loadUsers());
  }, [dispatch]);

  return { values: { ...users }, actions: { ...actions.users } };
}
