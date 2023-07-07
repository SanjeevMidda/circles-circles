import React from "react";

const Circle = ({ width, height, backgroundColor }) => {
  let styles = {
    width: width,
    height: height,
    background: backgroundColor,
  };

  return <div className="circle" style={styles}></div>;
};

export default Circle;
