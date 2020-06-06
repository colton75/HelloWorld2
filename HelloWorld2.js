import React from "react";
const config = require("./HelloWorld.config.json");

function HelloWorld2(props) {
  console.log(config.text);

  return (
    <div>
      <p className="small">{config.text}</p>
    </div>
  );
}

export default HelloWorld2;
