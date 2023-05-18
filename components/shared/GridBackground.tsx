import React, { CSSProperties, MouseEvent, useRef, useState } from "react";

export interface MyCustomCSS extends CSSProperties {
  "--mouse-x": string;
  "--mouse-y": string;
}

const GridBackground = () => {
  const [cellCount, setCellCount] = useState(64);
  const cellsRef = useRef<HTMLDivElement[] | null[]>([]);
  const [mousePosition, setMousePosition] = useState(
    new Array(cellCount).fill({
      x: "0px",
      y: "0px",
    })
  );

  const handleMouseMove = (e: MouseEvent, i: number) => {
    const { currentTarget: target } = e;

    const rect = target.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    const newMousePositions = [...mousePosition];
    newMousePositions[i] = {
      x: `${x}px`,
      y: `${y}px`,
    };
    setMousePosition(newMousePositions);
  };

  return (
    <div className="grid-background">
      {new Array(cellCount).fill(0).map((_, i) => {
        return (
          <div
            className="grid-background__cell"
            key={i}
            ref={(element) => (cellsRef.current[i] = element)}
            onMouseMove={(e) => {
              handleMouseMove(e, i);
            }}
            style={
              {
                "--mouse-x": mousePosition[i].x,
                "--mouse-y": mousePosition[i].y,
              } as MyCustomCSS
            }
          >
            <div className="content" />
          </div>
        );
      })}
    </div>
  );
};

export default GridBackground;
