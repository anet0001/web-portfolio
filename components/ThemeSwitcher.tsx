import React, { FC } from "react";

interface TSProps {}

interface Theme {
  name: string;
}

const ThemeSwitcher: FC<TSProps> = () => {
  const themes: Theme[] = [{ name: "adsd" }, { name: "adsd" }];

  return (
    <div className="theme-switcher">
      {themes.map(({ name }, index) => (
        <button
          className="theme-switcher__switch"
          key={index}
          onClick={() => console.log(name)}
        >
          {}n
        </button>
      ))}
    </div>
  );
};

export default ThemeSwitcher;
