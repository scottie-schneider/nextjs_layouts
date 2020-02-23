import React from "react";

function MenuIcon(props) {
  const title = props.title || "ic menu 48px";

  return (
    <svg
      height={props.size || "48"}
      width={props.size || "48"}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={props.color || "#000"}>
        <path d="M6 36h36v-4H6v4zm0-10h36v-4H6v4zm0-14v4h36v-4H6z" />
      </g>
    </svg>
  );
}

export default MenuIcon;
