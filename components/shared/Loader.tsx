import { gsap } from "gsap";
import React, { Dispatch, FC, SetStateAction, useEffect, useRef } from "react";

interface LoaderProps {
  showLoader: boolean;
  setShowLoader: Dispatch<SetStateAction<boolean>>;
}

const Loader: FC<LoaderProps> = ({ showLoader, setShowLoader }) => {
  const scope = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline();
      timeline
        .from(".progress-bar", {
          autoAlpha: 0,
          duration: 1,
          delay: 1,
        })
        .to(".progress-bar", {
          delay: 0.5,
          keyframes: [
            {
              "--progress": 0.1,
            },
            {
              "--progress": 0.4,
            },
            {
              "--progress": 1,
            },
            {
              opacity: 0,
              delay: 0.5,
            },
          ],
          duration: 2,
          onComplete: () => {
            setShowLoader(false);
          },
        })
        .set(scope.current, {
          autoAlpha: 0,
          display: "none",
        });
    }, scope);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div className="loader" ref={scope}>
      <div className="progress-bar" />
    </div>
  );
};

export default Loader;
