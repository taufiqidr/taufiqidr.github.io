import React, { useState } from "react";

const Icon = ({ icon, link, footer }) => {
  const [hover, setHover] = useState(false);
  const handleHover = () => setHover(true);
  const handleHoverOut = () => setHover(false);
  return (
    <a
      className="text-light"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverOut}
    >
      {!hover ? (
        icon
      ) : (
        <div className={footer ? "text-warning" : "text-primary"}>{icon}</div>
      )}
    </a>
  );
};

export default Icon;
