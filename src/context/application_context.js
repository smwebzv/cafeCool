import React, { createContext, useReducer } from "react";
import DailyReportsReducer from "./contextReducer/dailyReportsReducer";
import UserReducer from "./contextReducer/userReducer";
import DailyReportsState from "./contextState/dailyReportsState";
import UserState from "./contextState/userState";
import AddNewFaqsState from "./contextState/addNewFaqsState";
import AddNewFaqsReducer from "./contextReducer/addnewFaqsReducer";
import { useNavigate } from "react-router-dom";
import { saveFAQS } from "./actions/faqsActions";
import { GetFaqs } from "./actions/faqsActions";
export const AppContext = createContext();

const AppMainContext = (props) => {
  let navigate = useNavigate();

  const [dailyReportsState, dailyReportsDispatch] = useReducer(
    DailyReportsReducer,
    DailyReportsState
  );
  const [userState, userDispatch] = useReducer(UserReducer, UserState);
  const [addNewFaqsState, addNewFaqDispatch] = useReducer(
    AddNewFaqsReducer,
    AddNewFaqsState
  );
  const saveNewFaq = (data) => {
    saveFAQS(data)
      .then((res) => {
        console.log(res.data);
        data.user = userState.userInfo;
        data.date = new Date();
        data.id = res.data.generatedMaps[0].id;
        addNewFaqDispatch({ type: "addNewItemFaqs", payload: data });
        navigate("/faqs");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getFaqsList = () => {
    GetFaqs()
      .then((res) => {
        addNewFaqDispatch({ type: "addNewFaqs", payload: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <AppContext.Provider
      value={{
        dailyReportsState,
        userState,
        userDispatch,
        dailyReportsDispatch,
        addNewFaqsState,
        addNewFaqDispatch,
        saveNewFaq,
        getFaqsList,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppMainContext;
