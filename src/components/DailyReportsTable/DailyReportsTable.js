import { DailyReportsTableFrame } from "./DailyReportsTableStyle";
import { ReactComponent as PreviewIcon } from "../../assets/icon/PreviewIcon.svg";
import { ReactComponent as UpdateIcon } from "../../assets/icon/UpdateIcon.svg";
import { ReactComponent as DeleteIcon } from "../../assets/icon/DeleteIcon.svg";
import { ReactComponent as ArrowDown } from "../.../../../assets/icon/ArrowDown.svg";
import { ReactComponent as ArrowUp } from "../.../../../assets/icon/ArrowUp.svg";
import moment from "moment";

const DailyReportsTable = ({
    sortByDate, 
    sortDate, 
    dailyReports, 
    hovered, 
    notHovered, 
    selectedItemIndex, 
    OpenSpecificFaq, 
    UpdateSpecificFaq, 
    Delete}) => {
    return(
        <DailyReportsTableFrame>
         <table>
            <thead>
              <tr>
                <th>
                  Datum
                  <div className="arrow" onClick={() => sortByDate()}>
                  { 
                    sortDate === "asc" ?  <ArrowDown /> :
                    sortDate === "desc" ?  <ArrowUp /> : <ArrowDown />
                  }
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
        </DailyReportsTableFrame>
    );
}

export default DailyReportsTable;