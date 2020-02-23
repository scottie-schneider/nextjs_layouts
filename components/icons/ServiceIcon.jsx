import React from "react";

function ServiceIcon(props) {
  const title = props.title || "ic markunread mailbox 48px";

  return (
    <svg
      height="48"
      width="48"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={props.color || "#fff"}>
        <path d="M40 12H20v12h-4V8h12V0H12v12H8c-2.2 0-4 1.8-4 4v24c0 2.2 1.8 4 4 4h32c2.2 0 4-1.8 4-4V16c0-2.2-1.8-4-4-4z" />
      </g>
    </svg>
  );
}

export default ServiceIcon;
