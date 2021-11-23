import { combineReducers } from "redux";
import {
  casesReducer,
  loadingReducer,
  reducer,
  singleCountryReducer,
} from "./reducer";

const reducers = combineReducers({
  allCountries: reducer,
  country1: singleCountryReducer,
  loadingEffect: loadingReducer,
  coronaCases: casesReducer,
});

export default reducers;
