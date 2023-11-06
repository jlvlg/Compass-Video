import { useEffect, useRef } from "react";
import $clamp from "clamp-js";

export default function useClamp(track?: any) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const element: HTMLElement = ref.current;
    element.removeAttribute("style");
    $clamp(element, { clamp: "auto" });
  }, [track]);

  return ref;
}
