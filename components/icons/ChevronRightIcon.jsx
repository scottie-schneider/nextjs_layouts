import React from "react";

function ChevronRightIcon(props) {
  const title = props.title || "ic chevron right 48px";

  return (
    <svg
      height={props.size || "48"}
      width={props.size || "48"}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={props.color || "#fff"}>
        <path d="M20 12l-2.83 2.83L26.34 24l-9.17 9.17L20 36l12-12z" />
      </g>
    </svg>
  );
}

export default ChevronRightIcon;
