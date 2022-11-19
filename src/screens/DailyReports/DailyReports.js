import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DailyReportsFrame, TableAndInputFrame} from "./DailyReportsStyle";
import { DeleteDailyReports, GetDailyReports } from "../../context/actions/dailyReportsActions";
import moment from "moment";
import { AppContext } from "../../context/application_context";
import Menu from "../../components/Menu/Menu";
import { ReactComponent as PreviewIcon } from "../../assets/icon/PreviewIcon.svg";
import { ReactComponent as UpdateIcon } from "../../assets/icon/UpdateIcon.svg";
import { ReactComponent as DeleteIcon } from "../../assets/icon/DeleteIcon.svg";
import { ReactComponent as ArrowIcon } from "../../assets/icon/ArrowIcon.svg";
import SearchInput from "../../components/SearchInput/SearchInput";

const DailyReports = (props) => {
  let navigate = useNavigate();
  const { dailyReportsDispatch, dailyReportsState } = useContext(AppContext);
  const [dailyReports, setDailyReports] = useState([]);
  const [hover, setHover] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1);

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

  const UpdateSpecificFaq = (item, indx) => {
    navigate("/unos-smene", { state: { list: item, indx } });
  }
  const OpenSpecificFaq = (item) => {
    navigate("/unos-smene", { state: { list: item, disableInput: true } });
  }

  const Delete = (id, indx) => {
    DeleteDailyReports(id).then((res) => {
      dailyReportsDispatch({ type: "removeDailyItem", payload: indx });
      console.log(res.data);
    }).catch((err) => {
      console.log(err);
    });

  }

  const hovered = (indx) => {
    setHover(true);
    setSelectedItemIndex(indx);
  }

  const notHovered = () => {
    setHover(false);
    setSelectedItemIndex(-1);
  }

  return (
    <DailyReportsFrame>
      <Menu/>
      <TableAndInputFrame>
        <SearchInput
          name={"Dnevni izvjestaji"}
          route={"/unos-smene"}
        />
          <table>
            <thead>
              <tr>
                <th>
                  Datum
                  <div className="arrow">
                    <ArrowIcon />
                  </div>
                </th>
                <th>Smjena</th>
                <th>Radnik</th>
                <th>Troskovi</th>
                <th>Pazar</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                dailyReports.map((item, indx) =>
                  <tr key={indx} onMouseEnter={() => hovered(indx)} onMouseLeave={() => notHovered()} className={selectedItemIndex === indx && "hovered"}>
                    <td>{moment(item.date).format("DD MMM YYYY")}</td>
                    <td>{item.shift}</td>
                    <td>{item.user.username}</td>
                    <td>{item.consumption}KM</td>
                    <td>{item.total}KM</td>
                    <td>
                      {
                        selectedItemIndex === indx &&
                        <>
                          <span>
                            <PreviewIcon className="prewIcon" onClick={() => OpenSpecificFaq(item)} />
                          </span>
                          <span>
                            <UpdateIcon className="updateIcon" onClick={() => UpdateSpecificFaq(item, indx)} />
                          </span>
                          <span>
                            <DeleteIcon className="deleteIcon" onClick={() => Delete(item.id, indx)} />
                          </span>
                        </>
                      }
                    </td>
                  </tr>
                )
              }
            </tbody>
          </table>
      </TableAndInputFrame>
    </DailyReportsFrame>
  );
};

export default DailyReports;
