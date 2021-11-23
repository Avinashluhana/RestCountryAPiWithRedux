import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { GlobalContext, GlobalProvider } from "./Context/GlobalState";
import "./Country1.css";
import { useDispatch, useSelector } from "react-redux";
import { singleCountry } from "../redux/countryActions";

export const Country1 = () => {
  const country1 = useSelector((state) => state.country1);

  const dispatch = useDispatch();

  // const { dispatch, state } = useContext(GlobalContext);
  const value = useContext(GlobalProvider);
  console.log("no data", value);
  const getMode = () => {
    return JSON.parse(localStorage.getItem("mode")) || false;
  };

  const [dark, setDark] = useState(getMode());
  const { country } = useParams();

  const getData = async () => {
    const response = await fetch(
      `https://disease.sh/v3/covid-19/countries/${country}`
    );
    const data = await response.json();
    console.log("single country data", data);
    if (data) {
      dispatch(singleCountry(data));
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className={dark ? "navbar navbar-light" : "navbar"}>
        <h3 className="heading">Where in the world?</h3>
        <h6 className="dark-mode" onClick={() => setDark(!dark)}>
          {/* <i className="fas fa-moon"></i> */}
          {dark ? "🌜 Dark mode" : " ☀️ Light mode"}
        </h6>
      </div>
      <div className={dark ? "main-body main2" : "main-body"}>
        <Link to="/">
          <button className="back-button">Back</button>
        </Link>
        <div className="container">
          <div className="country-data">
            <div className="row">
              <div className="col-lg-4 flag-image">
                <img src={country1.countryInfo?.flag} />
              </div>
              <div className="col-lg-4">
                <div className="second-column">
                  <div className="asdasd">{<h2>{country1.country}</h2>}</div>
                  {<h6>Region: {country1.continent}</h6>}

                  <h6>Population: {country1.population}</h6>

                  <div className="row">
                    <h6>Corona Cases: {country1.cases}</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="third-column">
                  <h6>Deaths: {country1.deaths}</h6>
                  <h6>Tests: {country1.tests}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
