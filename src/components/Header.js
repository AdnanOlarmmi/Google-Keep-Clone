import React from "react";
import LeftHeaderIcons from "./LeftHeaderIcons";
import RightHeaderIcons from "./RightHeaderIcons";

 let markup = <header className="flex-row" >
 <LeftHeaderIcons />
 <RightHeaderIcons />
  </header>;

const Header = () => {
  return markup;
}

export default Header;