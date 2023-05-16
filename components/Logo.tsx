import { Timeline } from "@/types/animation";
import { gsap } from "gsap";
import React, {
  ForwardRefRenderFunction,
  forwardRef,
  useEffect,
  useRef,
} from "react";

interface TCProps {
  showLoader: boolean;
}

const Logo: ForwardRefRenderFunction<HTMLDivElement, TCProps> = (
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
        y: -100,
      });
    }, scope);

    return () => ctx.revert();
  }, [showLoader]);

  return (
    <div className="logo" ref={scope}>
      <span className="text">Nonso Anetoh</span>
    </div>
  );
};

export default forwardRef(Logo);
