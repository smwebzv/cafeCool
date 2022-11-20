import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { MainHolder, ListHolder, Cart} from "./FaqsMobileStyle";
import SearchInput from "../../../components/SearchInput/SearchInput";
import MenuMobile from "../../../components/Menu/MenuMobile/MenuMobile";
import moment from "moment";
import { AppContext } from "../../../context/application_context";

const FaqsMobile = (props) => {
  const { addNewFaqsState, getFaqsList } = useContext(AppContext);
  const [getFaqs, setGetFaqs] = useState();

  useEffect(() => {
    if (addNewFaqsState?.faqsList?.length > 1) {
      setGetFaqs(addNewFaqsState.faqsList);
    } else {
      getFaqsList();
    }
  }, [addNewFaqsState.faqsList]);

  return (
    <MainHolder>
      <MenuMobile/>
        <div className="holder">
            <SearchInput/>
            <ListHolder>
                {
                    getFaqs?.map((item, indx) => 
                        <Cart key={indx}>
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
                        </Cart>
                    )
                }
                
            </ListHolder>
        </div>
        
    </MainHolder>
  );
};

export default FaqsMobile;
