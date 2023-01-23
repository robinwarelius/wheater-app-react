import { useState } from "react";

const BuildCurrentWeather = (props) => {
  if (!props.data) {
    return null;
  } else {
    return (
      <>
        <h1>
          <span>Nuvarande väderprognos</span>
        </h1>
        <div className="currentDiv">
          <h3>
            {props.data.location.name} | {props.data.location.country}
          </h3>
          <h3> Datum: {props.data.location.localtime.substring(0, 10)}</h3>
          <h3> Tid: {props.data.location.localtime.substring(11, 16)}</h3>
          <h3> Temperatur: {props.data.current.temp_c} ºC</h3>
          <img
            src={props.data.forecast.forecastday[0].day.condition.icon}
          ></img>
          <hr />
        </div>
      </>
    );
  }
};

export default BuildCurrentWeather;
