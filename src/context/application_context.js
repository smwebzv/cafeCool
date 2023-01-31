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
import { SendDailyReports } from "./actions/dailyReportsActions";
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
        data.user = userState.userInfo;
        data.date = new Date();
        data.id = res.data.generatedMaps[0].id;
        addNewFaqDispatch({ type: "addNewItemFaqs", payload: data });
        navigate("/fakture");
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

  const saveOrUpdateDailyList = (propsData, data, updatedItemIndex) => {
    if (propsData) {
      propsData.dailyList = data.products;
      propsData.total = data.total;
      propsData.consumption = data.consumption;
      propsData.consumptionDesc = data.consumptionDesc;
      dailyReportsDispatch({
        type: "updateDailyItem",
        payload: { data: propsData, indx: updatedItemIndex },
      });
      navigate("/");
    } else {
      SendDailyReports(data)
        .then((res) => {
          data.user = userState.userInfo;
          data.date = new Date();
          data.id = res.data.generatedMaps[0].id;
          dailyReportsDispatch({ type: "addNewDailyItem", payload: data });
          sessionStorage.removeItem("dailyReport");
          dailyReportsDispatch({ type: "setDailyReport", payload: {} });

          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
    }
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
        saveOrUpdateDailyList,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppMainContext;
