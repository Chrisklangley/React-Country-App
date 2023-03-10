import React from "react";
import { useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountry";

function Symbols() {
  let currentDisplay = useSelector(selectDisplay);
  console.log(currentDisplay);

  return (
    <div className="Symbols">
      <div className="stack">
        {currentDisplay.flags ? (
          <img src={currentDisplay.flags.png} alt="" />
        ) : null}
      </div>
      <div className="stack">
        {currentDisplay.coatOfArms ? (
          <img src={currentDisplay.coatOfArms.png} alt="" />
        ) : null}
      </div>
    </div>
  );
}

export default Symbols;
