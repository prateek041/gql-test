// This is the single link component

import React from "react";

const Link = (props) => {
  // taking the input
  const { link } = props; // destructuring the link

  return (
    <div>
      <div>
        {link.description} ({link.url})
      </div>
    </div>
  );
};

export default Link;
