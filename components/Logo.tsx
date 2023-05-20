import { GenericComponent } from "@/types";
import { gsap } from "gsap";
import React, { FC, useEffect, useRef } from "react";

const Logo: FC<GenericComponent> = ({ showLoader }) => {
  const logo = "(Nonso Anetoh)";
  const scope = useRef<HTMLDivElement | null>(null);

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
      <span className="text">{logo}</span>
    </div>
  );
};

export default Logo;
