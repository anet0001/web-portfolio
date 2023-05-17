// @ts-nocheck
import React, { MouseEvent, useEffect, useRef, useState } from "react";

export interface MyCustomCSS extends CSSProperties {
  "--mouse-x": string;
  "--mouse-y": string;
}

const GridBackground = () => {
  const [cellCount, setCellCount] = useState(64);
  const cellsRef = useRef([]);
  const [mousePosition, setMousePosition] = useState({
    x: "0px",
    y: "0px",
  });

  // useEffect(() => {
  //   const gridBackground = document.querySelector(".grid-background");
  //   let columns, rows;
  //   if (gridBackground) {
  //     columns = Number(
  //       getComputedStyle(gridBackground).getPropertyValue("--columns")
  //     );
  //     rows = Number(
  //       getComputedStyle(gridBackground).getPropertyValue("--rows")
  //     );

  //     setCellCount(columns * rows);
  //   }
  //   console.log(cellCount);
  // }, [cellCount]);

  const handleMouseMove = (e: MouseEvent) => {
    const { currentTarget: target } = e;

    const rect = target.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    setMousePosition({
      x: `${x}px`,
      y: `${y}px`,
    });
  };

  // useEffect(() => {
  //   for (const cell of cellsRef.current) {
  //     cell.addEventListener("mousemove", (e) => {
  //       const { currentTarget: target } = e;

  //       const rect = target.getBoundingClientRect(),
  //         x = e.clientX - rect.left,
  //         y = e.clientY - rect.top;

  //       setMousePosition({
  //         x: `${x}px`,
  //         y: `${y}px`,
  //       });
  //     });
  //   }

  //   const cells = cellsRef.current;

  //   return () => {
  //     for (const cell of cells) {
  //       if (cell)
  //         cell.removeEventListener("mousemove", (e) => {
  //           const { currentTarget: target } = e;
  //           console.log(e);

  //           const rect = target.getBoundingClientRect(),
  //             x = e.clientX - rect.left,
  //             y = e.clientY - rect.top;

  //           setMousePosition({
  //             x: `${x}px`,
  //             y: `${y}px`,
  //           });
  //         });
  //     }
  //   };
  // }, []);

  return (
    <div className="grid-background">
      {new Array(cellCount).fill(0).map((_, i) => {
        return (
          <div
            className="grid-background__cell"
            key={i}
            ref={(element) => (cellsRef.current[i] = element)}
            onMouseMove={(e) => {
              handleMouseMove(e);
            }}
            style={
              {
                "--mouse-x": mousePosition.x,
                "--mouse-y": mousePosition.y,
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
