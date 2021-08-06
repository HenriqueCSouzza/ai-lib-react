import React from "react";
import BodyText from "./BodyText";

export default function Copyright() {
  const d = new Date();
  return (
    <BodyText variant="caption" type="white" align="center" component="div">
      © {d.getFullYear()} - Zaga S/A - Todos os direitos reservados
    </BodyText>
  );
}
