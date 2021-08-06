import PropTypes from "prop-types";
import React from "react";

function Money({ children, noSpan = false, fraction = 2, ...props }) {
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: fraction,
  });

  if (noSpan) {
    return <>{formatter.format(children)}</>;
  }

  return <span {...props}>{formatter.format(children)}</span>;
}

Money.propTypes = {
  children: PropTypes.any,
};

export default Money;
