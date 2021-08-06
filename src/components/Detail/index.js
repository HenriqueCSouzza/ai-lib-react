import React from "react";
import Money from "@components/RapicareTable/Money";

const Detail = ({ type = "default", value }) => {
  const colors = {
    expansive: "#F2545B",
    cheap: "#00BDA5",
    default: "#2D3E50",
  };

  return <Money style={{ color: colors[type] }}>{value}</Money>;
};

export default Detail;
