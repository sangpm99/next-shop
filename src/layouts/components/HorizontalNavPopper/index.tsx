"use client";
import { useRef, useState } from "react";

interface Props {
  popperInlineEnd?: boolean;
  tag?: string;
  contentContainerTag?: string;
  isRtl?: boolean;
}

interface PopperContentStyle {
  left: string;
  top: string;
}

const HorizontalNavPopper = ({
  popperInlineEnd = false,
  tag = "div",
  contentContainerTag = "div",
  isRtl = false,
}: Props) => {
  const refPopperContainer = useRef(null);
  const refPopper = useRef(null);
  const [popperContentStyles, setPopperContentStyles] =
    useState<PopperContentStyle>({
      left: "0px",
      top: "0px",
    });

  const updatePopper = async () => {};
  return <div></div>;
};

export default HorizontalNavPopper;
