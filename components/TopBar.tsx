"use client";

import { useEffect, useState } from "react";

const TopBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const atTop = window.scrollY === 0;
      setIsVisible(atTop);
    };

    window.addEventListener("scroll", () =>
      requestAnimationFrame(handleScroll)
    );
    return () =>
      window.removeEventListener("scroll", () =>
        requestAnimationFrame(handleScroll)
      );
  }, []);

  return (
    <div
      id="top-bar"
      className={`bg-gray-100 fixed top-0 right-0 left-0 py-2 ${
        isVisible ? "visible-bar" : "hidden-bar"
      }`}
    >
      <p className="text-center py-2 font-semibold">
        0% APR available for qualified buyers
      </p>
    </div>
  );
};

export default TopBar;
