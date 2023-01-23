import React, { useState, useRef } from "react";
import Api from "./Api";
import BuildCurrentWeather from "./BuildCurrentWeather";
import BuildFutureWeather from "./BuildFutureWeather";
import img from "../images/search.png";

const Search = () => {
  const textRef = useRef();
  const [data, setData] = useState();
  const [url, setUrl] = useState(
    "https://api.weatherapi.com/v1/forecast.json?key=e0378a759e45453390c143311231801&q=sweden&days=8&aqi=no&alerts=no"
  );
  const [error, setError] = useState("");
  const [bool, setBool] = useState(true);

  const handleClick = () => {
    let userInput = textRef.current.value;
    setBool(true);
    if (userInput) {
      setUrl(
        "https://api.weatherapi.com/v1/forecast.json?key=e0378a759e45453390c143311231801&q=" +
          userInput +
          "&days=8&aqi=no&alerts=no"
      );
    }
  };

  {
    setInterval(setBool, 1);
  }

  return (
    <>
      {bool ? (
        <Api url={url} data={setData} error={setError} bool={setBool} />
      ) : (
        ""
      )}
      <section id="main-section">
        <section id="top-section">
          <div>
            <img className="searchImg" src={img} onClick={handleClick}></img>
            <input
              className="userInput"
              placeholder="Sök på plats"
              ref={textRef}
              type="text"
            />
            <br></br>
            <label>{error}</label>
            <hr />
          </div>
        </section>

        <section id="middle-section">
          <BuildCurrentWeather data={data} />
          <h1>
            <span>8-dygnsprognos</span>
          </h1>
          <div className="futureDiv">
            <BuildFutureWeather data={data} />
          </div>
        </section>
      </section>
    </>
  );
};

export default Search;
