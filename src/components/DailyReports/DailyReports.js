import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { LoginButton, LoginFrame } from "../Login/LoginStyle";
import { CaffeCoolTitle, DailyReportsFrame, InputHolder } from "./DailyReportsStyle";
import { DeleteDailyReports, GetDailyReports } from "../../context/actions/dailyReportsActions";
import { Input } from "../../AppStyle";
import moment from "moment";

const DailyReports = (props) => {
  let navigate = useNavigate();

  const [dailyReports, setDailyReports] = useState([]);

  const DailyReports = () => {
    GetDailyReports().then((res) => {
      setDailyReports(res.data);
      console.logO(res.data);
    }).catch((err) =>{
      console.log(err);
    })
  }

  useEffect(() => {
    DailyReports();
  }, []);

  const UpdateSpecificFaq = (item) => {
    console.log("----", item);
    navigate("/addDailyReports", {state: {list:item}});
  }
  const OpenSpecificFaq = (item) => {
    console.log("----", item);
    navigate("/addDailyReports", {state: {list:item, disableInput: true}});
  }

  const Delete = (id) => {
    DeleteDailyReports(id).then((res)=> {
      DailyReports();
      console.log(res.data);
    }).catch((err)=> {
      console.log(err);
    });
    
  }


  return (
    <LoginFrame>
      <DailyReportsFrame>
        <CaffeCoolTitle>Cool Caffe</CaffeCoolTitle>
        <div className="buttons">
          <LoginButton className="button">
            <NavLink
              to="/addDailyReports"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              Unesi smjenu
            </NavLink>
          </LoginButton>
          <LoginButton className="button">
            <NavLink
              to="/addNewFaq"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              Unesi fakturu
            </NavLink>
          </LoginButton>
          <LoginButton className="button">
            <NavLink
              to="/faqs"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              Sve fakture
            </NavLink>
          </LoginButton>
        </div>
        <InputHolder>
          <Input 
            type="text"
            placeholder="Pretrazi..."
          />
        </InputHolder>
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
                <td className="doc" onClick={() => OpenSpecificFaq(item)}></td>
                <td className="pen" onClick={() => UpdateSpecificFaq(item)}></td>
                <td className="delete" onClick={() => Delete(item.id)}></td>
              </tr>
            )
            }
          </tbody>
        </table>
      </DailyReportsFrame>
    </LoginFrame>
  );
};

export default DailyReports;
