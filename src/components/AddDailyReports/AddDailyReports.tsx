import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import GetDrinks from "../../context/actions/drinkActions";
import { AppContext } from "../../context/application_context";
import { AddProd } from "../AddNewFaq/AddNewFaqStyle";
import {
  AddDailyReportsFrame,
  AddDailyReportsHolder,
  FrameButton,
} from "./AddDailyReportsStyle";


const AddDailyReports = () => {
  let location:any = useLocation();
  const { dailyReportsDispatch, dailyReportsState, saveOrUpdateDailyList } =
    useContext(AppContext);
  const [products, setProducts] = useState<any>([]);
  const [total, setTotal] = useState<any>(0.0);
  const [dailyShift, setDailyShift] = useState<any>(1);
  const [propsData, setPropsData] = useState<any>(location?.state?.list);
  const [consumption, setConsumption] = useState<any>(
    propsData ? Number(propsData.consumption) : 0
  );
  const [consumptionDesc, setConsumptionDesc] = useState<any>(
    propsData ? propsData.consumptionDesc : ""
  );
  const [disableInput, setDisableInput] = useState<any>(
    location?.state?.disableInput
  );
  const [updatedItemIndex, setUpdatedItemIndex] = useState<any>(
    location?.state?.indx
  );

  useEffect(() => {
    if (propsData) {
      propsData.dailyList?.map((item:any) => {
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
          .then((res:any) => {
            res.data.map((item:any, indx:number) => {
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
          .catch((err:any) => {
            console.log(err);
          });
      }
    }
  }, [dailyReportsState.dailyReport]);

  const potrosnja = (indx:number, number:string) => {
    if (!isNaN(+number) === false) return;
    const productsCoppy = products.slice();
    const item = productsCoppy[indx];
    const oldPrice = productsCoppy[indx].totalPrice;

    item.consumption = number;
    item.totalPrice = Number(item.consumption) * Number(item.price);
    item.remaind = Number(item.carried) - Number(item.consumption);
    const newTotal = total - oldPrice + item.totalPrice;
    saveDataForSessionStorage(newTotal.toFixed(2), productsCoppy, consumption, consumptionDesc);
    setProducts(productsCoppy);
    setTotal(newTotal.toFixed(2));
  };

  const consuptionHandleAmount = (e:any) => {
    const oldPrice = consumption;
    const { value } = e.target;
    if (!isNaN(+value) === false) return;
    let data = consumption;
    data = value;
    const newTotal = Number(total) + Number(oldPrice) - data;
    saveDataForSessionStorage(newTotal.toFixed(2), products, data, consumptionDesc);
    
    setTotal(newTotal.toFixed(2));
    setConsumption(data);
  };

  const consuptionHandleDesc = (e:any) => {
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

  const saveDataForSessionStorage = (total:any, products:any, consumption:number, consumptionDesc:string) => {
    if(propsData) return;
    const dailyReportsData = {
      total: total,
      dailyList: products,
      consumption: consumption,
      consumptionDesc: consumptionDesc,
    };
    sessionStorage.setItem("dailyReport", JSON.stringify(dailyReportsData));
    dailyReportsDispatch({ type: "setDailyReport", payload: dailyReportsData });
  }

  return (
    <AddDailyReportsHolder>
      <AddDailyReportsFrame>
        <table>
          <thead>
            <tr>
              <th>Naziv Artikla</th>
              <th>Cijena</th>
              <th>Preneseno</th>
              <th>Potrošnja</th>
              <th>Ostatak</th>
              <th>Vrijednost</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item:any, indx:number) => (
              <tr key={indx}>
                <td className="ime">{item.name}</td>
                <td className="cijena">{item.price}</td>
                <td className="preneseno">{item.carried}</td>
                <td className="potrosnja">
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
                <td className="vrijednost">{item.totalPrice} KM</td>
              </tr>
            ))}
            <tr className="rashodi">
              <td colSpan={1}>Rashodi</td>
              <td colSpan={4}>
                <textarea
                  className="rashodiOpis"
                  placeholder="Navedi rashode"
                  value={consumptionDesc}
                  disabled={disableInput}
                  onChange={(e) => consuptionHandleDesc(e)}
                ></textarea>
              </td>
              <td colSpan={1}>
                <input
                  className="potrosnjaInpt"
                  type="text"
                  value={consumption}
                  disabled={disableInput}
                  onChange={(e) => consuptionHandleAmount(e)}
                />
              </td>
            </tr>
            <tr className="rashodi">
              <td colSpan={5}>Ukupno</td>
              <td>{total}KM</td>
            </tr>
          </tbody>
        </table>
        <FrameButton>
          <AddProd onClick={() => Send()}>Snimi Smjenu</AddProd>
        </FrameButton>
      </AddDailyReportsFrame>
    </AddDailyReportsHolder>
  );
};

export default AddDailyReports;
