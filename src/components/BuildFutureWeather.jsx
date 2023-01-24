import { useState } from "react";

const BuildFutureWeather = (props) => {
  if (!props.data) {
    return null;
  }

  const list = props.data.forecast.forecastday.map((element, index) => {
    return (
      <>
        <div className="card">
          <h2 className="name">{element.date}</h2>
          <img className="circle-img" src={element.day.condition.icon}></img>
          <p>Max temperatur: {element.day.maxtemp_c} ºC</p>
          <p>Min temperatur: {element.day.mintemp_c} ºC</p>
        </div>
      </>
    );
  });

  return (
    <>
      <div>{list}</div>
    </>
  );
};

export default BuildFutureWeather;
