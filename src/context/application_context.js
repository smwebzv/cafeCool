import React, { createContext, useReducer } from "react";
import contextReducer from "./contextReducer/contextReducer";
import DailyReportsReducer from "./contextReducer/dailyReportsReducer";
import contextState from "./contextState/contextState";
import DailyReportsState from "./contextState/dailyReportsState";
import AddNewFaqsState from "./contextState/addNewFaqsState";
import AddNewFaqsReducer from "./contextReducer/addnewFaqsReducer";
export const AppContext = createContext();

const AppMainContext = (props) => {
  const [dailyReportsState, dailyReportsDispatch] = useReducer(
    DailyReportsReducer,
    DailyReportsState
  );
  const [addNewFaqsState, addNewFaqDispatch] = useReducer(
    AddNewFaqsReducer,
    AddNewFaqsState
  );
  return (
    <AppContext.Provider
      value={{
        dailyReportsState,
        dailyReportsDispatch,
        addNewFaqsState,
        addNewFaqDispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppMainContext;
