import React, { useState } from "react";
import "../Card/Card.css";

export default function Card(props) {
  let [temperature, setTemperature] = React.useState("");
  let [loading, setLoading] = useState(true);
  let [cityName, setCityName] = useState("Delhi");
  let [searchTerm, setSearchTerm] = useState(cityName);

  function HandleChange(event) {
    setCityName(event.target.value);
  }

  function SubmitName() {
    setSearchTerm(cityName);
  }
  React.useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=40443b5a6f43c12faca0a27a979c7f98&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        setTemperature(data);
        setLoading(false);
        // console.log(data);
      });
    //console.log(temperature.name)
  }, [searchTerm]);

  return (
    <div className="cardOuter">
      {loading === true ? (
        <p style={{ color: "red", fontSize: "5rem" }}>{"Working"}</p>
      ) : (
        <>
          <h1>{`${temperature.name}`}</h1>
          <h2>{`${temperature.main.temp}`}</h2>
          <img src={props.image} alt="City Pic" />
          <input onChange={HandleChange} />
          <button onClick={SubmitName}>Submit</button>
        </>
      )}
    </div>
  );
}
