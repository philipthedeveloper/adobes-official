import { useEffect, useState } from "react";

export const useScrollPosition = (
  ref: HTMLElement | Element | null | undefined,
  position: number = 0,
  successCallback?: () => void,
  errorCallback?: () => void
) => {
  const [isPastPosition, setIsPastPosition] = useState(false);

  useEffect(() => {
    const scrollHandler = (): void => {
      if (window.scrollY >= position) {
        setIsPastPosition(true);
        if (successCallback) successCallback();
      } else {
        setIsPastPosition(false);
        if (errorCallback) errorCallback();
      }
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [ref, window.scrollY]);

  return { isPastPosition };
};
