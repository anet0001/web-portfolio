import { GenericComponent } from "@/types";
import { gsap } from "gsap";
import React, { FC, useEffect, useRef, useState } from "react";

const Clock: FC<GenericComponent> = ({ showLoader }) => {
  const scope = useRef<HTMLDivElement | null>(null);
  const [ottawaTime, setOttawaTime] = useState<string>("");
  const [workingHours, setWorkingHours] = useState<boolean>(false);

  useEffect(() => {
    if (showLoader) return;

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline();

      timeline.from([".time", ".status"], {
        autoAlpha: 0,
        y: 100,
        stagger: 0.05,
      });
    }, scope);

    return () => ctx.revert();
  }, [showLoader]);

  useEffect(() => {
    const displayCurrentTime = () => {
      const date = new Date();
      const ottawaTime = date.toLocaleTimeString("en-US", {
        timeZone: "America/Toronto",
        hour: "numeric",
        minute: "numeric",
        hour12: false,
      });

      const hour = date.getHours();
      const workingHours = hour >= 7 && hour <= 23;

      setWorkingHours(workingHours);
      setOttawaTime(ottawaTime);
    };

    const timer = setInterval(displayCurrentTime, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="clock" ref={scope}>
      <span className="time">{ottawaTime}</span>
      <span
        className={`status ${
          workingHours ? "status--working" : "status--resting"
        }`}
      />
    </div>
  );
};

export default Clock;
