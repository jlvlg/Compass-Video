import { useSearchParams } from "react-router-dom";
import { actions, useDispatch, useSelector } from "../../store";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function useLogin() {
  const router = useRouter();
  const dispatch = useDispatch();
  const sessionId = useSelector((state) => state.users.sessionId);

  useEffect(() => {
    const localSessionId = localStorage.getItem("sessionId");

    if (localSessionId) {
      dispatch(actions.users.login(localSessionId));
      router.replace("/home");
    }
  }, [dispatch, router]);

  return sessionId;
}
