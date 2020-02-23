import React from "react";

function ChatIcon(props) {
  const title = props.title || "ic chat bubble outline 48px";

  return (
    <svg
      height={props.size || "48"}
      width={props.size || "48"}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={props.color || "#fff"}>
        <path d="M40 4H8C5.79 4 4 5.79 4 8v36l8-8h28c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zm0 28H12l-4 4V8h32v24z" />
      </g>
    </svg>
  );
}

export default ChatIcon;
