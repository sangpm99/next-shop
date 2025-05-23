"use client";
import { useState, useEffect, ReactNode } from "react";
import { useFloating, offset, flip, shift } from "@floating-ui/react";

interface Props {
  popperInlineEnd?: boolean;
  tag?: string;
  contentContainerTag?: string;
  children: ReactNode;
}

interface PopperContentStyle {
  left: string;
  top: string;
}

const HorizontalNavPopper = ({
  popperInlineEnd = false,
  tag = "div",
  contentContainerTag = "div",
  children,
}: Props) => {
  const [isContentShown, setIsContentShown] = useState(false);

  const { x, y, strategy, update, refs, floatingStyles } = useFloating({
    placement: popperInlineEnd ? "right-start" : "bottom-start",
    middleware: [offset(6), flip(), shift()],
  });

  useEffect(() => {
    function onScroll() {
      update();
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [update]);

  return <div>{children}</div>;
};

export default HorizontalNavPopper;
