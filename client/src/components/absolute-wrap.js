import React from "react";

const AbsoluteWrap = ({ children }) => {
  return <div style={{position:"absolute", width: "100vw"}}>{children}</div>;
};

export default AbsoluteWrap;
