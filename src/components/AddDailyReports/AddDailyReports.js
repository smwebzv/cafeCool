import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {SendDailyReports, UpdateDailyReports} from "../../context/actions/dailyReportsActions";
import GetDrinks from "../../context/actions/drinkActions";
import { AppContext } from "../../context/application_context";
import { AddProd } from "../AddNewFaq/AddNewFaqStyle";
import {
  AddDailyReportsFrame,
  AddDailyReportsHolder,
  FrameButton,
} from "./AddDailyReportsStyle";


const AddDailyReports = (props) => {
  let navigate = useNavigate();
  let location = useLocation();

const {dailyReportsDispatch, dailyReportsState, userState} = useContext(AppContext);
const [products, setProducts] = useState([]);
const [total, setTotal] = useState(0.00);
const [dailyShift, setDailyShift] = useState(1);
const [propsData, setPropsData] = useState(location?.state?.list);
const [consumption, setConsumption] = useState(propsData ? Number(propsData.consumption) : 0)
const [consumptionDesc, setConsumptionDesc] = useState(propsData ? propsData.consumptionDesc : "");
const [disableInput, setDisableInput] = useState(location?.state?.disableInput);
const [updatedItemIndex, setUpdatedItemIndex] = useState(location?.state?.indx);



useEffect(() => {
  if(propsData){
   propsData.dailyList?.map((item)=>{
    item.consumption = item.carried - item.remaind
   })
   setProducts(propsData.dailyList);
   setTotal(Number(propsData.total));
  }else{
    if(dailyReportsState?.dailyReport?.dailyList?.length){
      console.log("1");
      setProducts(dailyReportsState.dailyReport.dailyList);
      setTotal(dailyReportsState.dailyReport.total);
      setConsumption(dailyReportsState.dailyReport.consumption);
      setConsumptionDesc(dailyReportsState.dailyReport.consumptionDesc);
    }else{
      console.log("2");
      GetDrinks()
      .then((res) => {
        res.data.map((item, indx) => {
          item.consumption = 0
          item.totalPrice = 0
          item.remaind = item.carried
        })
        const data = {
          "dailyList": res.data,
          "total": 0.00,
          "consumption": consumption,
          "consumptionDesc": consumptionDesc
        }
        dailyReportsDispatch({type: "setDailyReport", payload: data});
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }
}, [dailyReportsState.dailyReport]);


const Potrosnja = (indx, number) => {
  if(!isNaN(+number) === false) return;
  const productsCoppy = products.slice();
  const item = productsCoppy[indx];
  const oldPrice = productsCoppy[indx].totalPrice;

  item.consumption = number
  item.totalPrice = Number(item.consumption) * Number(item.price);
  item.remaind = Number(item.carried) - Number(item.consumption);
  const newTotal = total - oldPrice + item.totalPrice;
  const dailyReportsData = {
    "total": newTotal.toFixed(2),
    "dailyList": productsCoppy,
    "consumption": consumption,
    "consumptionDesc": consumptionDesc
  }
  sessionStorage.setItem("dailyReport", JSON.stringify(dailyReportsData));
  dailyReportsDispatch({type: "setDailyReport", payload: dailyReportsData});
  setProducts(productsCoppy);
  setTotal(newTotal.toFixed(2));
}

const consuptionHandleAmount = (e) => {
  const oldPrice = consumption;
  const { value } = e.target;
  if(!isNaN(+value) === false) return;
  let data = consumption;
  data = value;
  
  const newTotal = Number(total) + Number(oldPrice) - data;
  const dailyReportsData = {
    "total": newTotal.toFixed(2),
    "dailyList": products,
    "consumption": data,
    "consumptionDesc": consumptionDesc
  }
  sessionStorage.setItem("dailyReport", JSON.stringify(dailyReportsData));
  dailyReportsDispatch({type: "setDailyReport", payload: dailyReportsData});
  setTotal(newTotal.toFixed(2));
  setConsumption(data);
};

const consuptionHandleDesc = (e) => {
  const { value } = e.target;
  let data = consumptionDesc;
  data = value;
  const dailyReportsData = {
    "total": total,
    "dailyList": products,
    "consumption": consumption,
    "consumptionDesc": data
  }
  sessionStorage.setItem("dailyReport", JSON.stringify(dailyReportsData));
  dailyReportsDispatch({type: "setDailyReport", payload: dailyReportsData});
  setConsumptionDesc(data);
};

useEffect(() => {
  var today = new Date()
  const time = today.getHours();
  if(time >= 8 && time <= 16){
    setDailyShift(1);
  }else if(time >= 16 && time <= 23)
  {
    setDailyShift(2);
  }
}, []);

const Send = () => {
  let data = {
    "shift": dailyShift,
    "consumption": consumption,
    "consumptionDesc": consumptionDesc,
    "total": total,
    "dailyList": products
  }
  if(propsData){
    const dataForUpdate = {
      "total": total
    }
    propsData.dailyList = products;
    propsData.total = total;
    propsData.consumption = consumption;
    propsData.consumptionDesc = consumptionDesc;
    console.log(propsData);
    /*UpdateDailyReports(propsData.user.id, dataForUpdate).then((res)=>{
    }).catch((err)=>{
      console.log(err);
    })*/
    dailyReportsDispatch({type: "updateDailyItem", payload: {data: propsData, indx:updatedItemIndex}});
    navigate("/"); 
  }else{
    SendDailyReports(data).then((res) => {
      data.user = userState.userInfo
      data.date = new Date(); 
      data.id = res.data.generatedMaps[0].id;
      dailyReportsDispatch({type: "addNewDailyItem", payload: data })
      sessionStorage.removeItem("dailyReport");
      dailyReportsDispatch({type: "setDailyReport", payload: {}});
      
      navigate("/"); 
    }).catch((err) => {
      console.log(err);
    })
  }
}

/*useEffect(() => {
  const dailyReportsData = {
    "total": total,
    "dailyList": products,
    "consumption": consumption,
    "consumptionDesc": consumptionDesc
  }
  sessionStorage.setItem("dailyReport", JSON.stringify(dailyReportsData));
  dailyReportsDispatch({type: "setDailyReport", payload: dailyReportsData});
}, [total, consumptionDesc, products, consumption]);*/


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
            {products.map((item, indx) => (
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
                  onChange={(e) => Potrosnja(indx, e.target.value)} 
                  />
                </td>
                <td className="ostatak">{item.remaind}</td>
                <td className="vrijednost">{item.totalPrice} KM</td>
              </tr>
            ))}
            <tr className="rashodi">
              <td colSpan="1">Rashodi</td>
              <td colSpan="4">
                <textarea
                  className="rashodiOpis"
                  placeholder="Navedi rashode"
                  value={consumptionDesc}
                  disabled={disableInput}
                  onChange={(e) => consuptionHandleDesc(e)}
                ></textarea>
              </td>
              <td colSpan="1">
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
              <td colSpan="5">Ukupno</td>
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
