import { useEffect } from "react";

export function useKeyDown({ key, setVisible }) {
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.keyCode === "27") {
        setVisible(false);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
}
