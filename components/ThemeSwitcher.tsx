import { themes } from "@/data";
import { GenericComponent } from "@/types";
import { gsap } from "gsap";
import React, { CSSProperties, FC, useEffect, useRef, useState } from "react";

export interface MyCustomCSS extends CSSProperties {
  "--data-index": number;
}

const ThemeSwitcher: FC<GenericComponent> = ({ showLoader }) => {
  const scope = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [currentTheme, setCurrentTheme] = useState<string>("");

  useEffect(() => {
    if (showLoader) return;

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline();

      timeline.from(".theme-switcher__switch", {
        autoAlpha: 0,
        stagger: 0.15,
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
          key={index}
          onClick={() => handleThemeSwitch(`${name}`)}
          style={{ "--data-index": index } as MyCustomCSS}
          aria-label="Theme Switcher"
        />
      ))}
    </div>
  );
};

export default ThemeSwitcher;
