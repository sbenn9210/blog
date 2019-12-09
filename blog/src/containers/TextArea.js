import React from "react";

const TextArea = props => {
  return (
    <div>
      <textarea className="field" type="text" {...props} />
    </div>
  );
};

export default TextArea;
