import { useEffect, useState } from "react";

export default function usePresence(isVisible: boolean) {
  const [isPresent, setIsPresent] = useState(isVisible);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setIsPresent(true);
      setIsExiting(false);
    } else {
      setIsExiting(true);
    }
  }, [isVisible]);

  const onAnimationEnd = () => {
    if (isExiting) {
      setIsPresent(false);
    }
  };

  return { isPresent, isExiting, onAnimationEnd };
}
