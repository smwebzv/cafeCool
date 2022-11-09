import React, { createContext, useReducer } from "react";
import DailyReportsReducer from "./contextReducer/dailyReportsReducer";
import UserReducer from "./contextReducer/userReducer";
import DailyReportsState from "./contextState/dailyReportsState";
import UserState from "./contextState/userState";
import AddNewFaqsState from "./contextState/addNewFaqsState";
import AddNewFaqsReducer from "./contextReducer/addnewFaqsReducer";
export const AppContext = createContext();

const AppMainContext = (props) => {
  const [dailyReportsState, dailyReportsDispatch] = useReducer(
    DailyReportsReducer,
    DailyReportsState
  );
  const [userState, userDispatch] = useReducer(
    UserReducer, 
    UserState
  );
  const [addNewFaqsState, addNewFaqDispatch] = useReducer(
    AddNewFaqsReducer,
    AddNewFaqsState
  );
  return (
    <AppContext.Provider
      value={{
        dailyReportsState,
        userState,
        userDispatch,
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
