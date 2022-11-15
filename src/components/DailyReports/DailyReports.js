import { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { LoginButton, LoginFrame } from "../Login/LoginStyle";
import { CaffeCoolTitle, DailyReportsFrame, InputHolder, ShiftEntry, TableAndInputFrame, TableFrame } from "./DailyReportsStyle";
import { DeleteDailyReports, GetDailyReports} from "../../context/actions/dailyReportsActions";
import { Input } from "../../AppStyle";
import moment from "moment";
import { AppContext } from "../../context/application_context";
import Menu from "../../UI/Menu/Menu";
import { ReactComponent as PreviewIcon } from "../../assets/icon/PreviewIcon.svg";
import { ReactComponent as UpdateIcon } from "../../assets/icon/UpdateIcon.svg";
import { ReactComponent as DeleteIcon } from "../../assets/icon/DeleteIcon.svg";

const DailyReports = (props) => {
  let navigate = useNavigate();
  const {dailyReportsDispatch, dailyReportsState} = useContext(AppContext);
  const [dailyReports, setDailyReports] = useState([]);
  
  const DailyReports = () => {
    GetDailyReports().then((res) => {
      dailyReportsDispatch({type: "setDailyList", payload: res.data});
    }).catch((err) =>{
      console.log(err);
    })
  }

  useEffect(() => {
    if(dailyReportsState?.dailyList?.length){
      setDailyReports(dailyReportsState?.dailyList);
    }else{
      DailyReports();
    }
  }, [dailyReportsState?.dailyList]);

  const UpdateSpecificFaq = (item, indx) => {
    navigate("/addDailyReports", {state: {list:item, indx}});
  }
  const OpenSpecificFaq = (item) => {
    navigate("/addDailyReports", {state: {list:item, disableInput: true}});
  }

  const Delete = (id, indx) => {
    DeleteDailyReports(id).then((res)=> {
      dailyReportsDispatch({type: "removeDailyItem", payload: indx});
      console.log(res.data);
    }).catch((err)=> {
      console.log(err);
    });
    
  }

  return (
      <DailyReportsFrame>
        <Menu></Menu>
        <TableAndInputFrame>
            <NavLink 
              to="/addDailyReports"
              style={{textDecoration: "none"}}
            > 
              <ShiftEntry>
                Unos smjene
              </ShiftEntry>
            </NavLink>
          <TableFrame>
            <table>
              <thead>
                <tr>
                  <th>Datum</th>
                  <th>Smjena</th>
                  <th>Radnik</th>
                  <th>Troskovi</th>
                  <th>Pazar</th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {
                  dailyReports.map((item, indx) =>
                  <tr key={indx}>
                    <td>{moment(item.date).format("DD MMM YYYY")}</td>
                    <td>{item.shift}</td>
                    <td>{item.user.username}</td>
                    <td>{item.consumption}KM</td>
                    <td>{item.total}KM</td>
                    <td>
                      <PreviewIcon onClick={() => OpenSpecificFaq(item)}/>
                    </td>
                    <td>
                      <UpdateIcon onClick={() => UpdateSpecificFaq(item, indx)}/>
                    </td>
                    <td>
                    <DeleteIcon onClick={() => Delete(item.id, indx)}/>
                    </td>
                  </tr>
                )
                }
              </tbody>
            </table>
          </TableFrame>
        </TableAndInputFrame>
      </DailyReportsFrame>
  );
};

export default DailyReports;
