import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountry";

const Weather = () => {
  const [weather, setWeather] = useState();

  let display = useSelector(selectDisplay);

  const latitude = display.capitalInfo.latlng[0];
  const longitude = display.capitalInfo.latlng[1];

  // ------------------------------------
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://weatherapi-com.p.rapidapi.com/current.json",
      params: { q: `${latitude}, ${longitude}` },
      headers: {
        "X-RapidAPI-Key": "c7fce06954msh082b0f51aeace99p1d1ff2jsn8ad3bcc40263",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setWeather(response.data);
      })
      .catch(function (error) {});
  }, []);

  // ------------------------------------

  return (
    <div>
      <table className="overview-table">
        <tr>
          <td>Conditions: {weather?.current?.condition?.text} </td>
        </tr>
        <tr>
          <td>Temperature in :{weather?.current?.temp_f} </td>
        </tr>
        <tr>
          <td>Feels Like:{weather?.current?.feelslike_f} </td>
        </tr>
        <tr>
          <td>Humidity:{weather?.current?.humidity} </td>
        </tr>
        <tr>
          <td>Wind Speed:{weather?.current?.wind_mph} Mph. </td>
        </tr>
      </table>
    </div>
  );
};

export default Weather;
