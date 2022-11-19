import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Menu from "../../components/Menu/Menu";
import SearchInput from "../../components/SearchInput/SearchInput";
import TableExpenses from "../../components/TableExpenses/TableExpenses";
import GetDrinks from "../../context/actions/drinkActions";
import { AppContext } from "../../context/application_context";
import {
  AddDailyReportsFrame,
  TableAndInputFrame,
} from "./AddDailyReportsStyle";

const AddDailyReports = (props) => {
  let navigate = useNavigate();
  let location = useLocation();

  const { dailyReportsDispatch, dailyReportsState, saveOrUpdateDailyList } =
    useContext(AppContext);
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0.0);
  const [dailyShift, setDailyShift] = useState(1);
  const [propsData, setPropsData] = useState(location?.state?.list);
  const [consumption, setConsumption] = useState(
    propsData ? Number(propsData.consumption) : 0
  );
  const [consumptionDesc, setConsumptionDesc] = useState(
    propsData ? propsData.consumptionDesc : ""
  );
  const [disableInput, setDisableInput] = useState(
    location?.state?.disableInput
  );
  const [updatedItemIndex, setUpdatedItemIndex] = useState(
    location?.state?.indx
  );

  useEffect(() => {
    if (propsData) {
      propsData.dailyList?.map((item) => {
        item.consumption = item.carried - item.remaind;
      });
      setProducts(propsData.dailyList);
      setTotal(Number(propsData.total));
    } else {
      if (dailyReportsState?.dailyReport?.dailyList?.length) {
        setProducts(dailyReportsState.dailyReport.dailyList);
        setTotal(dailyReportsState.dailyReport.total);
        setConsumption(dailyReportsState.dailyReport.consumption);
        setConsumptionDesc(dailyReportsState.dailyReport.consumptionDesc);
      } else {
        GetDrinks()
          .then((res) => {
            res.data.map((item, indx) => {
              item.consumption = 0;
              item.totalPrice = 0;
              item.remaind = item.carried;
            });
            const data = {
              dailyList: res.data,
              total: 0.0,
              consumption: consumption,
              consumptionDesc: consumptionDesc,
            };
            dailyReportsDispatch({ type: "setDailyReport", payload: data });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  }, [dailyReportsState.dailyReport]);

  const potrosnja = (indx, number) => {
    if (!isNaN(+number) === false) return;
    const productsCoppy = products.slice();
    const item = productsCoppy[indx];
    const oldPrice = productsCoppy[indx].totalPrice;

    item.consumption = number;
    item.totalPrice = Number(item.consumption) * Number(item.price);
    item.remaind = Number(item.carried) - Number(item.consumption);
    const newTotal = total - oldPrice + item.totalPrice;
    saveDataForSessionStorage(
      newTotal.toFixed(2),
      productsCoppy,
      consumption,
      consumptionDesc
    );
    setProducts(productsCoppy);
    setTotal(newTotal.toFixed(2));
  };

  const consuptionHandleAmount = (e) => {
    const oldPrice = consumption;
    const { value } = e.target;
    if (!isNaN(+value) === false) return;
    let data = consumption;
    data = value;
    const newTotal = Number(total) + Number(oldPrice) - data;
    saveDataForSessionStorage(
      newTotal.toFixed(2),
      products,
      data,
      consumptionDesc
    );
    setTotal(newTotal.toFixed(2));
    setConsumption(data);
  };

  const consuptionHandleDesc = (e) => {
    const { value } = e.target;
    let data = consumptionDesc;
    data = value;
    saveDataForSessionStorage(total, products, consumption, data);
    setConsumptionDesc(data);
  };

  useEffect(() => {
    var today = new Date();
    const time = today.getHours();
    if (time >= 8 && time <= 16) {
      setDailyShift(1);
    } else if (time >= 16 && time <= 23) {
      setDailyShift(2);
    }
  }, []);

  const Send = () => {
    let data = {
      shift: dailyShift,
      consumption: consumption,
      consumptionDesc: consumptionDesc,
      total: total,
      dailyList: products,
    };
    saveOrUpdateDailyList(propsData, data, updatedItemIndex);
  };

  const saveDataForSessionStorage = (
    total,
    products,
    consumption,
    consumptionDesc
  ) => {
    if (propsData) return;
    const dailyReportsData = {
      total: total,
      dailyList: products,
      consumption: consumption,
      consumptionDesc: consumptionDesc,
    };
    sessionStorage.setItem("dailyReport", JSON.stringify(dailyReportsData));
    dailyReportsDispatch({ type: "setDailyReport", payload: dailyReportsData });
  };

  return (
    <AddDailyReportsFrame>
      <Menu />
      <TableAndInputFrame>
        <SearchInput name={"Unos smjene"} hiddeAddButton="true" />
        <table>
          <thead>
            <tr>
              <th>Naziv Artikla</th>
              <th>Cijena</th>
              <th>Preneseno</th>
              <th style={{ width: "35px" }}></th>
              <th>Potrošnja</th>
              <th>Ostatak</th>
              <th>Vrijednost</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, indx) => (
              <tr key={indx}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.carried}</td>
                <td style={{ width: "35px" }}></td>
                <td>
                  <input
                    className="potrosnjaInpt"
                    type="text"
                    name="consumption"
                    value={item.consumption}
                    disabled={disableInput}
                    onChange={(e) => potrosnja(indx, e.target.value)}
                  />
                </td>
                <td className="ostatak">{item.remaind}</td>
                <td className="vrijednost">{item.totalPrice.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <TableExpenses
          consuptionHandleDesc={consuptionHandleDesc}
          consuptionHandleAmount={consuptionHandleAmount}
          total={total}
          send={Send}
          disableInput={disableInput}
          consumptionDesc={consumptionDesc}
          consumption={consumption}
        />
      </TableAndInputFrame>
    </AddDailyReportsFrame>
  );
};

export default AddDailyReports;
