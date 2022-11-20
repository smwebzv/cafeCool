import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { MainHolder, ListHolder, Cart} from "./AddDailyReportsMobileStyle";
import SearchInput from "../../../components/SearchInput/SearchInput";
import MenuMobile from "../../../components/Menu/MenuMobile/MenuMobile";

const AddDailyReportsMobile = (props) => {
  let location = useLocation();
  const [products, setProducts] = useState([]);
  const [propsData, setPropsData] = useState(location?.state?.list);

  useEffect(() => {
    if (propsData) {
      propsData.dailyList?.map((item) => {
        item.consumption = item.carried - item.remaind;
      });
      setProducts(propsData.dailyList);
    }
  }, []);

  return (
    <MainHolder>
      <MenuMobile/>
        <div className="holder">
            <SearchInput/>
            <ListHolder>
                {
                    products.map((item, indx) => 
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

export default AddDailyReportsMobile;
