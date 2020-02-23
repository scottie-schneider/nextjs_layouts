import React from "react";

function DashIcon(props) {
  const title = props.title || "ic dashboard 48px";

  return (
    <svg
      height={props.size || "48"}
      width={props.size || "48"}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={props.color || "#fff"}>
        <path d="M6 26h16V6H6v20zm0 16h16V30H6v12zm20 0h16V22H26v20zm0-36v12h16V6H26z" />
      </g>
    </svg>
  );
}

export default DashIcon;
