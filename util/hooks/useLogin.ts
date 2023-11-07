import { actions, useDispatch, useSelector } from "../../store";
import { useEffect } from "react";

export default function useLogin() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(actions.users.loadSessions());
  }, [dispatch]);

  return { values: { ...users }, actions: { ...actions.users } };
}
