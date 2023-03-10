import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountry";

function Overview() {
  // const border = currentDisplay.boarder
  // const border = currentDisplay.boarder
  // const border = currentDisplay.boarder

  let currentDisplay = useSelector(selectDisplay);
  useEffect(() => {
    console.log(currentDisplay);
  }, []);

  return (
    <div className="stack">
      <p>{currentDisplay.capital}</p>
      <p>{currentDisplay.population}</p>
      <p>{currentDisplay.region}</p>
      <p>{currentDisplay.timezones}</p>
      {/* {currentDisplay.map((item, i) => {
        return <h2 key={i}>{item.name.common}</h2>;
      })} */}
    </div>
  );
}

export default Overview;
