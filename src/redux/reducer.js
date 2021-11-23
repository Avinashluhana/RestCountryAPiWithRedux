import { ActionTypes } from "./action-type";

const initialState = {
  countryData: [],
  country: [],
  laodingEffect: false,
  coronaCases: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_COUNTRY: {
      return { ...state, countryData: payload };
    }
    default:
      return state;
  }
};

export const singleCountryReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SINGLE_COUNTRY: {
      return { ...state, ...payload };
    }
    default:
      return state;
  }
};
export const loadingReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.LOADING: {
      return { ...state, loadingEffect: payload };
    }
    default:
      return state;
  }
};

export const casesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.CASES: {
      return { ...state, coronaCases: payload };
    }
    default:
      return state;
  }
};
