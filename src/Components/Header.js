import axios from "axios";
import React, { useState } from "react";
import { BsFillFlagFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import {
  deletePotentialCountires,
  setPotentialCountries,
} from "../redux/slices/potentialCountriesSlice";
const Header = () => {
  const [input, setInput] = useState();
  const dispatch = useDispatch();

  return (
    <div className="header">
      <div className="home">
        <BsFillFlagFill style={{ marginRight: "10px" }} fontSize="1.6em" />
        <h3 className="home-country"></h3>
      </div>
      <div className="country-input">
        <input
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button
          onClick={() => {
            axios
              .get(`https://restcountries.com/v3.1/name/${input}`)
              .then((res) => {
                dispatch(deletePotentialCountires());
                dispatch(setPotentialCountries(res.data));
                console.log(res.data);
              })
              .catch((err) => {
                alert("No countries found that match your search!");
              });
          }}
        >
          search
        </button>
      </div>
    </div>
  );
};

export default Header;
