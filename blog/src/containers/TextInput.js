import React from "react";

const TextInput = props => {
  return (
    <div>
      <input className="field" type="text" {...props} />
    </div>
  );
};

export default TextInput;
