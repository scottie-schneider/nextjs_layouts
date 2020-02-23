import React from "react";

function ChevronLeftIcon(props) {
  const title = props.title || "ic chevron left 48px";

  return (
    <svg
      height={props.size || "48"}
      width={props.size || "48"}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={props.color || "#fff"}>
        <path d="M30.83 14.83L28 12 16 24l12 12 2.83-2.83L21.66 24z" />
      </g>
    </svg>
  );
}

export default ChevronLeftIcon;
