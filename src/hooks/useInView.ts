import { useEffect, useState } from "react";

interface HookProps {
  ref: HTMLElement | Element | null;
  outOfViewTo: "top" | "bottom" | "both";
  topOffSetFromBottom?: number;
  bottomOffSetFromTop?: number;
}

const useInView = ({
  ref,
  outOfViewTo,
  topOffSetFromBottom,
  bottomOffSetFromTop,
}: HookProps) => {
  const [inView, setInView] = useState(false);
  const [topFromOffSet, setTopFromOffset] = useState(0);

  useEffect(() => {
    const handleWindowScroll = (): void => {
      if (ref) {
        const boundingRect = ref.getBoundingClientRect();
        const { top, bottom } = boundingRect;
        switch (outOfViewTo) {
          case "both": {
            const inView =
              (top <= 0 && bottom >= (bottomOffSetFromTop || 0)) ||
              (top >= 0 && bottom <= window.innerHeight) ||
              (bottom >= window.innerHeight &&
                top <= window.innerHeight - (topOffSetFromBottom || 0));
            setInView(inView);
            setTopFromOffset(
              window.innerHeight - top - (topOffSetFromBottom || 0)
            );
            break;
          }
          case "bottom": {
            const inView =
              (top <= 0 && bottom >= -1000000) ||
              (top >= 0 && bottom <= window.innerHeight) ||
              (bottom >= window.innerHeight &&
                top <= window.innerHeight - (topOffSetFromBottom || 0));
            setInView(inView);
            setTopFromOffset(
              window.innerHeight - top - (topOffSetFromBottom || 0)
            );
            break;
          }
          case "top": {
            const inView =
              (top <= 0 && bottom >= (bottomOffSetFromTop || 0)) ||
              (top >= 0 && bottom <= window.innerHeight) ||
              (bottom >= window.innerHeight &&
                top <= window.innerHeight + 1000000);
            setInView(inView);
            setTopFromOffset(
              window.innerHeight - top - (topOffSetFromBottom || 0)
            );
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleWindowScroll);

    //Clean up event listener befor adding it again
    return () => window.removeEventListener("scroll", handleWindowScroll);
  }, [
    ref,
    window.scrollY,
    topOffSetFromBottom,
    bottomOffSetFromTop,
    outOfViewTo,
  ]);

  return { inView, topFromOffSet };
};

export default useInView;
