import React, {
  FC,
  ForwardRefRenderFunction,
  HTMLProps,
  MutableRefObject,
  forwardRef,
} from "react";

interface TCProps {}

const TitleCard: ForwardRefRenderFunction<HTMLDivElement, TCProps> = (
  {},
  ref
) => {
  return (
    <div className="title-card" ref={ref}>
      <h3 className="test">TitleCard</h3>
    </div>
  );
};

export default forwardRef(TitleCard);
