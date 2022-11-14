import React, { useReducer } from "react";
import DailyReportsReducer from "./contextReducer/dailyReportsReducer";
import UserReducer from "./contextReducer/userReducer";
import UserState from "./contextState/userState"
import DailyReportsState from "./contextState/dailyReportsState";
import AddNewFaqsState from "./contextState/addNewFaqsState";
import AddNewFaqsReducer from "./contextReducer/addnewFaqsReducer";
import { useNavigate } from "react-router-dom";
import { saveFAQS } from "./actions/faqsActions";
import { GetFaqs } from "./actions/faqsActions";
import { SendDailyReports } from "./actions/dailyReportsActions";
export const AppContext = React.createContext<any>({});

const AppMainContext = (props: any) => {
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
  const saveNewFaq = (data: any) => {
    saveFAQS(data)
      .then((res: any) => {
        console.log(res.data);
        data.user = userState.userInfo;
        data.date = new Date();
        data.id = res.data.generatedMaps[0].id;
        addNewFaqDispatch({ type: "addNewItemFaqs", payload: data });
        navigate("/faqs");
      })
      .catch((err: any) => {
        console.log(err);
      });
  };
  const getFaqsList = () => {
    GetFaqs()
      .then((res: any) => {
        addNewFaqDispatch({ type: "addNewFaqs", payload: res.data });
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  const saveOrUpdateDailyList = (propsData: any, data: any, updatedItemIndex: any) => {
    if (propsData) {
      propsData.dailyList = data.products;
      propsData.total = data.total;
      propsData.consumption = data.consumption;
      propsData.consumptionDesc = data.consumptionDesc;
      console.log(propsData);
      /*UpdateDailyReports(propsData.user.id, dataForUpdate).then((res)=>{
    }).catch((err)=>{
      console.log(err);
    })*/
      dailyReportsDispatch({
        type: "updateDailyItem",
        payload: { data: propsData, indx: updatedItemIndex },
      });
      navigate("/");
    } else {
      SendDailyReports(data)
        .then((res: any) => {
          data.user = userState.userInfo;
          data.date = new Date();
          data.id = res.data.generatedMaps[0].id;
          dailyReportsDispatch({ type: "addNewDailyItem", payload: data });
          sessionStorage.removeItem("dailyReport");
          dailyReportsDispatch({ type: "setDailyReport", payload: {} });

          navigate("/");
        })
        .catch((err: any) => {
          console.log(err);
        });
    }
  }
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
        saveOrUpdateDailyList
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppMainContext;
