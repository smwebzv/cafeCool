import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MainHolder, ListHolder, Cart} from "./DailyReportsMobileStyle";
import {GetDailyReports } from "../../../context/actions/dailyReportsActions";
import { AppContext } from "../../../context/application_context";
import SearchInput from "../../../components/SearchInput/SearchInput";
import moment from "moment";
import MenuMobile from "../../../components/Menu/MenuMobile/MenuMobile";

const DailyReportsMobile = (props) => {
  let navigate = useNavigate();
  const { dailyReportsDispatch, dailyReportsState } = useContext(AppContext);
  const [dailyReports, setDailyReports] = useState([]);

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

  const OpenSpecificFaq = (item) => {
    navigate("/unos-smene", { state: { list: item} });
  }

  return (
    <MainHolder>
        <MenuMobile/>
        <div className="holder">
            <SearchInput/>
            <ListHolder>
                {
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
                
            </ListHolder>
        </div>
        
    </MainHolder>
  );
};

export default DailyReportsMobile;
