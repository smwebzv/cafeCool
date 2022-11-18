import { useContext, useEffect, useState } from "react";
import { SecondTableFrame, SecondTableHolder } from "./FaqsStyle";
import Moment from "moment";
import { AppContext } from "../../context/application_context";
import { AddDailyReportsFrame, ShiftAndInputFrame, ShiftEntry, TableAndInputFrame } from "../DailyReports/DailyReportsStyle";
import Menu from "../../components/Menu/Menu";
import { NavLink } from "react-router-dom";
import SearchInput from "../../components/SearchInput/SearchInput";
import { ReactComponent as ArrowDown } from "../.../../../assets/icon/ArrowDown.svg";

const Faqs = () => {
  const { addNewFaqsState, getFaqsList } = useContext(AppContext);
  const [getFaqs, setGetFaqs] = useState();
  const [dropDownIndex, setDropDownIndex] = useState(-1);
  const [selectedItem, setSelectedItem] = useState([]);

  useEffect(() => {
    if (addNewFaqsState?.faqsList?.length > 1) {
      setGetFaqs(addNewFaqsState.faqsList);
    } else {
      getFaqsList();
    }
  }, [addNewFaqsState.faqsList]);

  const showDailyLists = (indx) => {
    let i = dropDownIndex === indx ? -1 : indx;
    setDropDownIndex(i);
  };

  const selectItems = (item, index) => {
    let mainList = [...getFaqs]
    let mainSelectedList = [...selectedItem]

    if (mainSelectedList.includes(item)) {
      mainSelectedList.splice(mainSelectedList.indexOf(index), 1);
      mainList[index].selected = false;
    } else {
      mainSelectedList.push(item);
      mainList[index].selected = true;
    }
    setSelectedItem(mainSelectedList)
    setGetFaqs(mainList);
  };

  const selectAllItems = () => {
    if (selectedItem !== getFaqs) {
      setSelectedItem(getFaqs);
    } else {
      setSelectedItem([]);
    }
  }

  return (
    <AddDailyReportsFrame>
      <Menu></Menu>
      <TableAndInputFrame>
        <ShiftAndInputFrame>
          <NavLink
            to="//faqs"
            style={{ textDecoration: "none" }}
          >
            <ShiftEntry>
              Sve fakture
            </ShiftEntry>
          </NavLink>
          <SearchInput />
        </ShiftAndInputFrame>
        <SecondTableHolder>
          <SecondTableFrame>
            <table>
              <thead>
                <tr>
                  <th className="container">
                    <input type="checkbox" checked={selectedItem === getFaqs ? "checked" : ""} readOnly={true} />
                    <span className="checkmark" onClick={() => selectAllItems()}></span>
                    <span className="stall">#</span>
                  </th>
                  <th>Robu primio</th>
                  <th>Broj fakture</th>
                  <th>Nabavljeno</th>
                  <th>Ukupno</th>
                  <th>Datum nabavke
                    <ArrowDown className="iconDown" />
                  </th>
                </tr>
              </thead>
              {getFaqs?.map((item, index) => (
                <tbody key={index} className={dropDownIndex == index ? "dropDown" : ""}>
                  <tr className={dropDownIndex == index ? "withoutBorder" : ""}>
                    <td className="container">
                      <input type="checkbox" checked={item?.selected === true || selectedItem.includes(item) ? "checked" : ""} readOnly={true} />
                      <span className="checkmark" onClick={() => selectItems(item, index)}></span>
                    </td>
                    <td onClick={() => showDailyLists(index)}>{item.user.username}</td>
                    <td onClick={() => showDailyLists(index)}>{item.number}</td>
                    <td onClick={() => showDailyLists(index)}>{item.place}</td>
                    <td onClick={() => showDailyLists(index)}>{item.total}</td>
                    <td onClick={() => showDailyLists(index)}>{Moment(item.date).format("DD/MMM/YYYY")}</td>
                  </tr>
                  {dropDownIndex == index && (
                    <>
                      <tr className={dropDownIndex == index ? "withoutBorder" : ""}>
                        <th>#</th>
                        <th>Ime</th>
                        <th>Kolicina</th>
                        <th className="alignLeft">Ukupno</th>
                      </tr>
                      {item.dailyList.map((items, indx) =>
                        <tr key={indx}>
                          <td className="withoutBorder">{indx + 1}</td>
                          <td className="withoutBorder">{items.drinkId}</td>
                          <td className="withoutBorder">{items.quantity}</td>
                          <td className="alignLeft withoutBorder">{items.price}</td>
                        </tr>
                      )}
                    </>
                  )}
                </tbody>
              ))}
            </table>
          </SecondTableFrame>
        </SecondTableHolder>
      </TableAndInputFrame>
    </AddDailyReportsFrame>
  );
};

export default Faqs;
