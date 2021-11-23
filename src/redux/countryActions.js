import { ActionTypes } from "./action-type";

export const addCountry = (countryData) => {
  return {
    type: ActionTypes.ADD_COUNTRY,
    payload: countryData,
  };
};
export const singleCountry = (country1) => {
  return {
    type: ActionTypes.SINGLE_COUNTRY,
    payload: country1,
  };
};

export const loading = (loadingEffect) => {
  return {
    type: ActionTypes.LOADING,
    payload: loadingEffect,
  };
};
export const cases = (coronaCases) => {
  return {
    type: ActionTypes.CASES,
    payload: coronaCases,
  };
};
