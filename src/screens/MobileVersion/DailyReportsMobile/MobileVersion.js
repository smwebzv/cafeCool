import { useContext, useEffect, useState } from "react";
import { MainHolder, ListHolder, Cart} from "./MobileVersionStyle";
import {GetDailyReports } from "../../../context/actions/dailyReportsActions";
import { AppContext } from "../../../context/application_context";
import SearchInput from "../../../components/SearchInput/SearchInput";
import moment from "moment";
import MenuMobile from "../../../components/Menu/MenuMobile/MenuMobile";

const MobileVersion = (props) => {
  const { dailyReportsDispatch, dailyReportsState, addNewFaqsState, getFaqsList } = useContext(AppContext);
  const [dailyReports, setDailyReports] = useState([]);
  const [tab, setTab] = useState(1);
  const [getFaqs, setGetFaqs] = useState();
  const [dropDownIndex, setDropDownIndex] = useState(-1);
  const [products, setProducts] = useState([]);

  const DailyReports = () => {
    GetDailyReports().then((res) => {
      dailyReportsDispatch({ type: "setDailyList", payload: res.data });
    }).catch((err) => {
      console.log(err);
    })
  }

  useEffect(() => {
    if (dailyReportsState?.dailyList?.length) {
      setDailyReports(dailyReportsState?.dailyList);
    } else {
      DailyReports();
    }
  }, [dailyReportsState?.dailyList]);

  useEffect(() => {
    if (addNewFaqsState?.faqsList?.length > 1) {
      setGetFaqs(addNewFaqsState.faqsList);
    } else {
      getFaqsList();
    }
  }, [addNewFaqsState.faqsList]);


  const OpenSpecificFaq = (item) => {
    item.dailyList?.map((item) => {
      item.consumption = item.carried - item.remaind;
    });
    setProducts(item.dailyList);
    setTab(3);
  }

  const showDailyLists = (indx) => {
    let i = dropDownIndex === indx ? -1 : indx;
    setDropDownIndex(i);
  };

  const changeCurrentTab = (tabNumber) => {
    setTab(tabNumber);
  }

  return (
    <MainHolder>
        <MenuMobile changeCurrentTab={changeCurrentTab}/>
        <div className="holder">
            <SearchInput/>
            <ListHolder>
                { tab === 1 &&
                    dailyReports.map((item, indx) => 
                        <Cart key={indx} onClick={() => OpenSpecificFaq(item)}>
                            <div className={"row + borderBottom"}>
                                <div className="leftText">Radnik</div>
                                <div className="rightText">{item?.user?.username}</div>
                            </div>
                            <div className="row">
                                <div className="leftText">Smjena</div>
                                <div className="rightText">{item.shift}</div>
                            </div>
                            <div className="row">
                                <div className="leftText">Troskovi</div>
                                <div className="rightText">{item.consumption}KM</div>
                            </div>
                            <div className="row">
                                <div className="leftText">Pazar</div>
                                <div className="rightText">{item.total}KM</div>
                            </div>
                            <div className="row">
                                <div className="leftText">Datum</div>
                                <div className="rightText">{moment(item.date).format("DD MMM YYYY")}</div>
                            </div>

                        </Cart>
                    )
                }
                { tab === 2 &&
                    getFaqs?.map((item, indx) => 
                        <Cart key={indx} onClick={() => showDailyLists(indx)}>
                            <div className={"row + borderBottom"}>
                                <div className="leftText">Robu primio</div>
                                <div className="rightText">{item.user.username}</div>
                            </div>
                            <div className="row">
                                <div className="leftText">Broj fakture</div>
                                <div className="rightText">{item.number}</div>
                            </div>
                            <div className="row">
                                <div className="leftText">Nabavljeno</div>
                                <div className="rightText">{item.place}</div>
                            </div>
                            <div className="row">
                                <div className="leftText">Ukupno</div>
                                <div className="rightText">{item.total}</div>
                            </div>
                            <div className="row">
                                <div className="leftText">Datum nabavke</div>
                                <div className="rightText">{moment(item.date).format("DD MMM YYYY")}</div>
                            </div>
                            {dropDownIndex == indx &&
                              item.dailyList.map((e, index) => 
                                <div key={index} className="dropdownMenu">
                                  <div className="row">
                                    <div className="leftText">Ime</div>
                                    <div className="rightText">{e.drinkId}</div>
                                  </div>
                                  <div className="row">
                                    <div className="leftText">Kolicina</div>
                                    <div className="rightText">{e.quantity}</div>
                                  </div>
                                  <div className="row">
                                    <div className="leftText">Ukupno</div>
                                    <div className="rightText">{e.price}</div>
                                  </div>
                                </div>
                            )}
                        </Cart>
                    )
                }
                { tab === 3 &&
                    products?.map((item, indx) => 
                        <Cart key={indx}>
                            <div className={"row + borderBottom"}>
                                <div className="leftText">Naziv Artikla</div>
                                <div className="rightText">{item.name}</div>
                            </div>
                            <div className="row">
                                <div className="leftText">Cijena</div>
                                <div className="rightText">{item.price}</div>
                            </div>
                            <div className="row">
                                <div className="leftText">Preneseno</div>
                                <div className="rightText">{item.carried}</div>
                            </div>
                            <div className="row">
                                <div className="leftText">Potrošnja</div>
                                <div className="rightText">{item.consumption}</div>
                            </div>
                            <div className="row">
                                <div className="leftText">Ostatak</div>
                                <div className="rightText">{item.remaind}</div>
                            </div>
                            <div className="row">
                                <div className="leftText">Vrijednost</div>
                                <div className="rightText">{item.totalPrice.toFixed(2)}</div>
                            </div>
                        </Cart>
                    )
                }
            </ListHolder>
        </div>
        
    </MainHolder>
  );
};

export default MobileVersion;
