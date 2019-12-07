import React from "react";

const Toggle = ({ isToggled }) => {
  return (
    <div>
      <h2>Toggle</h2>
      <p>{isToggled ? "on" : "off"}</p>
    </div>
  );
};

export default Toggle;
