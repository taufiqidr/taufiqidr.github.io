import React, { useState } from "react";

const Up = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 20) {
      setVisible(true);
    } else if (scrolled <= 20) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <button
      onClick={scrollToTop}
      style={{ display: visible ? "inline" : "none" }}
      id="myBtn"
      title="Go to top"
      className="btn btn-primary"
    >
      <i className="bi bi-arrow-up"></i>
    </button>
  );
};

export default Up;
