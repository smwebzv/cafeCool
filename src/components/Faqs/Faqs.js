import { useContext, useEffect, useState } from "react";
import { SecondTableFrame, SecondTableHolder } from "./FaqsStyle";
import Moment from "moment";
import { AppContext } from "../../context/application_context";

const Faqs = () => {
  const { addNewFaqsState, getFaqsList } = useContext(AppContext);
  const [getFaqs, setGetFaqs] = useState();
  const [dropDownIndex, setDropDownIndex] = useState(-1);

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
  return (
    <SecondTableHolder>
      <SecondTableFrame>
        <table>
          <thead>
            <tr>
              <th colSpan="6">Cool Caffe Fakture</th>
            </tr>
          </thead>
          <thead>
            <tr>
              <th>#</th>
              <th>Robu Primio</th>
              <th>Broj Fakture</th>
              <th>Nabavljeno</th>
              <th>Ukupno</th>
              <th>Datum Nabavke</th>
            </tr>
          </thead>
          {getFaqs?.map((item, index) => (
            <tbody onClick={() => showDailyLists(index)} key={index}>
              <tr>
                <td>{index + 1}</td>
                <td>{item.user.username}</td>
                <td>{item.number}</td>
                <td>{item.place}</td>
                <td>{item.total}</td>
                <td>{Moment(item.date).format("DD/MMM/YYYY")}</td>
              </tr>
              {dropDownIndex == index && (
                <>
                  <tr>
                    <th>#</th>
                    <th>Ime</th>
                    <th>Kolicina</th>
                    <th>Ukupno</th>
                  </tr>
                  {item.dailyList.map((items, indx) => (
                    <tr key={indx}>
                      <td>{indx + 1}</td>
                      <td>{items.drinkId}</td>
                      <td>{items.quantity}</td>
                      <td>{items.price}</td>
                    </tr>
                  ))}
                </>
              )}
            </tbody>
          ))}
        </table>
      </SecondTableFrame>
    </SecondTableHolder>
  );
};

export default Faqs;
