import PropTypes from "prop-types";
import React from "react";

export default function RotateBackground({
  children,
  images,
  background,
  opacity,
}) {
  const random = Math.floor(Math.random() * images.length);
  const image = images[random];
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "fixed",
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: "#666",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {children}
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "fixed",
            top: 0,
            left: 0,
            backgroundColor: background,
            opacity: opacity,
            zIndex: -1,
          }}
        ></div>
      </div>
    </>
  );
}

RotateBackground.propTypes = {
  background: PropTypes.any,
  children: PropTypes.any,
  images: PropTypes.any,
  opacity: PropTypes.any,
};
