import React from "react";

function AlertIcon(props) {
  const title = props.title || "ic sim card alert 48px";

  return (
    <svg
      height={props.size || "48"}
      width={props.size || "48"}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={props.fill || "#fff"}>
        <path d="M36 4H20L8.05 16 8 40c0 2.2 1.8 4 4 4h24c2.2 0 4-1.8 4-4V8c0-2.2-1.8-4-4-4zM26 34h-4v-4h4v4zm0-8h-4V16h4v10z" />
      </g>
    </svg>
  );
}

export default AlertIcon;
