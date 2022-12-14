import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { LoginButton, LoginFrame } from "../Login/LoginStyle";
import { CaffeCoolTitle, FirstPageFrame } from "./FirstPageStyle";
import GetDrinks from "../../context/actions/drinkActions";
const FirstPage = (props) => {
  useEffect(() => {
    GetDrinks().then((res) => {
      console.log(res.data);
    });
  }, []);

  return (
    <LoginFrame>
      <FirstPageFrame>
        <CaffeCoolTitle>Cool Caffe</CaffeCoolTitle>
        <div className="buttons">
          <LoginButton className="button">
            <NavLink
              to="/firstTable"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              Unesi smjenu
            </NavLink>
          </LoginButton>
          <LoginButton className="button">
            <NavLink
              to="/faktura"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              Unesi fakturu
            </NavLink>
          </LoginButton>
          <LoginButton className="button">
            <NavLink
              to="/secondTable"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              Sve fakture
            </NavLink>
          </LoginButton>
        </div>
        <div className="inputHolder">
          <input
            className="searchInput"
            type="text"
            placeholder="Pretrazi..."
          ></input>
        </div>
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
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="doc"></td>
              <td className="pen"></td>
              <td className="delete"></td>
            </tr>
          </tbody>
        </table>
      </FirstPageFrame>
    </LoginFrame>
  );
};

export default FirstPage;
