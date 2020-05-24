import moment from "moment";
import { TIME_OFFSET } from "../settings";
import {
  CHANGE_CITY,
  CHANGE_LANGUAGE,
  CHANGE_PERIOD,
  CHANGE_THEME,
  REFRESH_TIME,
} from "./types";

const withTime = (state) => {
  const time = moment.utc().utcOffset(TIME_OFFSET);
  return {
    ...state,
    time,
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case CHANGE_CITY:
      localStorage.setItem("id", action.payload);
      return {
        ...withTime(state),
        id: action.payload,
      };
    case CHANGE_LANGUAGE:
      const lang = state.lang === "fr-fr" ? "ar-ma" : "fr-fr";
      localStorage.setItem("lang", lang);
      return {
        ...withTime(state),
        lang,
      };
    case CHANGE_PERIOD:
      const periodicity = state.periodicity === "daily" ? "monthly" : "daily";
      localStorage.setItem("periodicity", periodicity);
      return {
        ...withTime(state),
        periodicity,
      };
    case CHANGE_THEME:
      const theme = state.theme === "light" ? "dark" : "light";
      console.log(theme);
      localStorage.setItem("theme", theme);
      return {
        ...withTime(state),
        theme,
      };
    case REFRESH_TIME:
      // console.log('refreshing time');
      return {
        ...withTime(state),
      };
    default:
      return state;
  }
};

export default reducer;