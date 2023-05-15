import { Timeline } from "@/types/animation";
import { GridNine } from "@phosphor-icons/react";
import { gsap } from "gsap";
import React, { CSSProperties, FC, useEffect, useRef, useState } from "react";

interface TSProps {}

interface Theme {
  name: string;
}

export interface MyCustomCSS extends CSSProperties {
  "--data-index": number;
}

const ThemeSwitcher: FC<TSProps> = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [timeline, setTimeline] = useState<Timeline | undefined>();
  const scope = useRef(null);

  const themes: Theme[] = [
    { name: "light" },
    { name: "green" },
    { name: "dark" },
    { name: "grid" },
  ];

  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     const tl = gsap.timeline();
  //     setTimeline(tl);
  //   }, scope);

  //   return () => ctx.revert();
  // }, []);

  // useEffect(() => {
  //   timeline && timeline.reversed(!isHovered);
  // }, [timeline, isHovered]);

  // useEffect(() => {
  //   timeline &&
  //     timeline.to(".theme-switcher__switch", {
  //       xPercent: (index) => {
  //         return index === 0 ? 0 : index * 100;
  //       },
  //     });
  // }, [timeline, isHovered]);

  const reverseIndex = (index: number) => {
    return themes.length - index - 1;
  };

  return (
    <div
      className="theme-switcher"
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {themes.map(({ name }, index) => (
        <button
          className={`theme-switcher__switch theme-switcher__switch--${name}`}
          key={reverseIndex(index)}
          onClick={() => console.log(name)}
          style={{ "--data-index": reverseIndex(index) } as MyCustomCSS}
        />
      ))}
    </div>
  );
};

export default ThemeSwitcher;
