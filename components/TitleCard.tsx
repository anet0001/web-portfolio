import { Timeline } from "@/types/animation";
import { gsap } from "gsap";
import React, {
  ForwardRefRenderFunction,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "react";

interface TCProps {
  showLoader: boolean;
}

const TitleCard: ForwardRefRenderFunction<HTMLDivElement, TCProps> = (
  { showLoader },
  ref
) => {
  const scope = useRef(null);

  useEffect(() => {
    if (showLoader) return;

    const ctx = gsap.context(() => {
      let timeline = gsap.timeline();

      timeline.from(".text", {
        autoAlpha: 0,
        y: 100,
      });
    }, scope);

    return () => ctx.revert();
  }, [showLoader]);

  return (
    <div className="title-card" ref={scope}>
      <span className="text">Frontend Engineer</span>
    </div>
  );
};

export default forwardRef(TitleCard);
