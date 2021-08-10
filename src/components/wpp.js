import React from "react";
import { StaticImage } from "gatsby-plugin-image";

function Header() {
  return (
    <button
      style={{ position: `fixed`, paddingTop: `70vh`, paddingLeft: `2vw` }}
    >
      <StaticImage
        src="../images/wpp.svg"
        quality={100}
        style={{ width:`5vw`,height:`5vw`,minWidth:`5rem`,minHeight:`5rem` ,}}
        placeholder="blurred"
      />
    </button>
  );
}

export default Header;
