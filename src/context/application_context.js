import React, { createContext, useReducer } from "react";
import contextReducer from "./contextReducer/contextReducer";
import DailyReportsReducer from "./contextReducer/dailyReportsReducer";
import contextState from "./contextState/contextState";
import DailyReportsState from "./contextState/dailyReportsState";

export const AppContext = createContext();

const AppMainContext = (props) => {

  const [dailyReportsState, dailyReportsDispatch] = useReducer(DailyReportsReducer, DailyReportsState);

  return (
    <AppContext.Provider
      value={{
        dailyReportsState,
        dailyReportsDispatch
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppMainContext;