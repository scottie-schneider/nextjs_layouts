import React from "react";

function LibraryIcon(props) {
  const title = props.title || "ic local library 48px";

  return (
    <svg
      height={props.size || "48"}
      width={props.size || "48"}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={props.color || "#fff"}>
        <path d="M24 23.09C19.27 18.7 12.96 16 6 16v22c6.96 0 13.27 2.7 18 7.09C28.73 40.7 35.04 38 42 38V16c-6.96 0-13.27 2.7-18 7.09zM24 16c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6z" />
      </g>
    </svg>
  );
}

export default LibraryIcon;
