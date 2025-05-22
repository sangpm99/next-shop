"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import "./scrollToTop.scss";

import Button from "../antd/Button";
import { Icon } from "@iconify/react";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const nodeRef = useRef(null);

  const onScrollToTop = useCallback(() => {
    window.scrollTo({ top: 0 });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY >= 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="scroll-to-top fixed bottom-10 right-10">
      <CSSTransition
        in={isVisible}
        timeout={1000}
        classNames={{
          enter: "animate__animated animate__fadeInUp",
          enterDone: "fade-in-up-out-loop",
          exit: "animate__animated animate__fadeOutDown",
        }}
        unmountOnExit
        nodeRef={nodeRef}
      >
        <div ref={nodeRef}>
          <Button onClick={onScrollToTop} aria-label="Scroll to top">
            <Icon icon="ri-arrow-up-line" />
          </Button>
        </div>
      </CSSTransition>
    </div>
  );
}

export default ScrollToTop;
