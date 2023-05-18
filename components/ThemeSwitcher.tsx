import { Timeline } from "@/types/animation";
import { GridNine } from "@phosphor-icons/react";
import { gsap } from "gsap";
import React, { CSSProperties, FC, useEffect, useRef, useState } from "react";

interface TSProps {
  showLoader: boolean;
}

interface Theme {
  name: string;
}

export interface MyCustomCSS extends CSSProperties {
  "--data-index": number;
}

const ThemeSwitcher: FC<TSProps> = ({ showLoader }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("");
  const scope = useRef(null);

  const themes: Theme[] = [
    { name: "light" },
    { name: "green" },
    { name: "spring-green" },
    { name: "orange" },
  ];

  useEffect(() => {
    if (showLoader) return;

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline();

      timeline.from(".theme-switcher__switch", {
        autoAlpha: 0,
        stagger: 0.25,
      });
    }, scope);

    return () => ctx.revert();
  }, [showLoader]);

  useEffect(() => {
    const theme = localStorage.getItem("current-theme");
    if (!theme) {
      setCurrentTheme("light");
      return;
    }
    document.body.setAttribute("data-theme", theme);
    setCurrentTheme(theme);
  }, []);

  const reverseIndex = (index: number) => {
    return themes.length - index - 1;
  };

  const handleThemeSwitch = (theme: string) => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("current-theme", theme);
    setCurrentTheme(theme);
  };

  return (
    <div
      className="theme-switcher"
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      ref={scope}
    >
      {themes.map(({ name }, index) => (
        <button
          className={`theme-switcher__switch theme-switcher__switch--${name} ${
            currentTheme === name ? "theme-switcher__switch--active" : ""
          }`}
          key={reverseIndex(index)}
          onClick={() => handleThemeSwitch(`${name}`)}
          style={{ "--data-index": reverseIndex(index) } as MyCustomCSS}
        />
      ))}
    </div>
  );
};

export default ThemeSwitcher;
