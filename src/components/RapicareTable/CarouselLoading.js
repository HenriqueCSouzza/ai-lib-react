import PropTypes from "prop-types";
import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clean from "../../assets/loading/clean.svg";
import flask from "../../assets/loading/flask.svg";
import garbage from "../../assets/loading/garbage.svg";
import injection from "../../assets/loading/injection.svg";
import pills from "../../assets/loading/pills.svg";
import soap from "../../assets/loading/soap.svg";
import stethoscope from "../../assets/loading/stethoscope.svg";
import thermometer from "../../assets/loading/thermometer.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "120px",
    height: "100px",
    margin: "auto",
    "& span": {
      display: "block",
      width: "100%",
      textAlign: "center",
      lineHeight: "100%",
      marginTop: theme.spacing(2),
    },
  },
  image: {
    textAlign: "center",
    "& img": {
      width: "50px",
      height: "60px",
      fontSize: "40px",
      textAlign: "center",
      transformOrigin: "bottom center",
      animation: "3s $animaLoading infinite",
      opacity: 0,
      filter:
        "invert(56%) sepia(7%) saturate(1346%) hue-rotate(155deg) brightness(82%) contrast(89%)",
    },
  },

  "@keyframes animaLoading": {
    "0%": {
      transform: "rotate(90deg)",
    },
    "10%": {
      opacity: 0,
    },
    "35%": {
      transform: "rotate(0deg)",
      opacity: 1,
    },
    "65%": {
      transform: "rotate(0deg)",
      opacity: 1,
    },
    "80%": {
      opacity: 0,
    },
    "100%": {
      transform: "rotate(-90deg)",
    },
  },
}));

function CarouselLoading({ delay, text, style }) {
  const images = [
    clean,
    flask,
    garbage,
    injection,
    pills,
    soap,
    stethoscope,
    thermometer,
  ];

  const [imageIndex, setImageIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      imageEl.current.webkitAnimationPlayState = "paused";
      setImageIndex((i) => (i < images.length - 1 ? i + 1 : 0));
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    imageEl.current.webkitAnimationPlayState = "running";
  }, [imageIndex]);

  const imageEl = useRef(null);

  const styles = useStyles();

  return (
    <div className={styles.root} style={style}>
      <div className={styles.image}>
        <img
          ref={imageEl}
          src={images[imageIndex]}
          alt={`${images[imageIndex]}`}
        />
      </div>
      <span>{text}</span>
    </div>
  );
}

CarouselLoading.propTypes = {
  delay: PropTypes.number,
  style: PropTypes.any,
  text: PropTypes.string,
};

export default CarouselLoading;
