import { useEffect, useRef } from "react";

export function useOutClick(callback) {
  const ref = useRef(null);

  useEffect(() => {
    function handleClick(event) {
      if (!ref.current.contains(event.target)) {
        callback(event);
      }
    }
    window.addEventListener("mousedown", handleClick);
    return () => {
      window.removeEventListener("mousedown", handleClick);
    };
  }, []);
  return ref;
}
