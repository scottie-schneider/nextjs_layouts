import React from "react";

function HomeIcon(props) {
  const title = props.title || "ic home 48px";

  return (
    <svg
      height={props.size || "48"}
      width={props.size || "48"}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill="#000000">
        <path d="M20 40V28h8v12h10V24h6L24 6 4 24h6v16z" />
      </g>
    </svg>
  );
}

export default HomeIcon;
