import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectedPotentials } from "../redux/slices/potentialCountriesSlice";
import { displayCountrySlice } from "../redux/slices/displayCountry";

const OptionDisplay = () => {
  const { setDisplayCountry } = displayCountrySlice.actions;

  let currentPotentials = useSelector(selectedPotentials);
  console.log(currentPotentials);
  const dispatch = useDispatch();

  return (
    <div className="stack">
      {currentPotentials &&
        currentPotentials.map((e, i) => (
          <h2
            key={Math.random()}
            className="Country-options"
            onClick={() => dispatch(setDisplayCountry(currentPotentials[i]))}
          >
            {e.name.common}
          </h2>
        ))}
    </div>
  );
};

export default OptionDisplay;
