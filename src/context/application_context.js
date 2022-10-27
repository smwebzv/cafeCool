import React, { createContext, useReducer } from "react";
import contextReducer from "./contextReducer/contextReducer";
import contextState from "./contextState/contextState";

export const AppContext = createContext();
const AppMainContext = (props) => {
  const [mainState, dispatch] = useReducer(contextReducer, contextState);

  return (
    <AppContext.Provider
      value={{
        state: mainState,
        dispatch,
        
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppMainContext;