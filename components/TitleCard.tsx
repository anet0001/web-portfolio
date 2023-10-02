import { GenericComponent } from "@/types";
import { gsap } from "gsap";
import React, { FC, forwardRef, useEffect, useRef } from "react";

const TitleCard: FC<GenericComponent> = ({ showLoader }) => {
  const scope = useRef<HTMLDivElement | null>(null);
  const title = "Front-end Developer";

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
      <span className="text">{title}</span>
    </div>
  );
};

export default TitleCard;
