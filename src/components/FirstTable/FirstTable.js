import { useEffect, useState } from "react";
import {SendDailyReports} from "../../context/actions/dailyReportsActions";
import GetDrinks from "../../context/actions/drinkActions";
import { AddProd } from "../Faktura/FakturaStyle";
import {
  FirstTableFrame,
  FirstTableHolder,
  FrameButton,
} from "./FirstTableStyle";

const FirstTable = () => {

const [products, setProducts] = useState([]);
const [total, setTotal] = useState(0.00);
const [dailyShift, setDailyShift] = useState(1);
const [consuption, setConsuption] = useState({
  consuptionAmount: 0,
  consuptionDesc: ""
})

useEffect(() => {
    GetDrinks()
      .then((res) => {
        res.data.map((item, indx) => {
          item.consumption = 0
          item.totalPrice = 0
          item.remaind = item.carried
        })
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
}, []);

const Potrosnja = (indx, number) => {
  const productsCoppy = products.slice();
  const item = productsCoppy[indx];
  const oldPrice = productsCoppy[indx].totalPrice;

  item.consumption = number
  item.totalPrice = Number(item.consumption) * Number(item.price);
  item.remaind = Number(item.carried) - Number(item.consumption);
  const newTotal = total - oldPrice + item.totalPrice;

  setProducts(productsCoppy);
  setTotal(newTotal.toFixed(2));
}

const consuptionHandle = (e) => {
  const oldPrice = consuption.consuptionAmount;
  const { name, value } = e.target;
  const data = consuption;
  data[name] = value;
  
  const newTotal = Number(total) + Number(oldPrice) - data.consuptionAmount;

  setTotal(newTotal.toFixed(2));
  setConsuption(data);
};

useEffect(() => {
  var today = new Date()
  const time = today.getHours();
  console.log(time);
  if(time >= 8 && time <= 16){
    console.log("prva");
    setDailyShift(1);
  }else if(time >= 16 && time <= 23)
  {
    console.log("druga");
    setDailyShift(2);
  }
}, []);

const Send = () => {
  const data = {
    "shift": dailyShift,
    "consumption": consuption.consuptionAmount,
    "consumptionDesc": consuption.consuptionDesc,
    "total": total,
    "dailyList": products
  }
  SendDailyReports(data).then((res) => {
    console.log(res.data);
  }).catch((err) => {
    console.log(err);
  })
}

  return (
    <FirstTableHolder>
      <FirstTableFrame>
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
                  name="consuptionDesc"
                  onChange={(e) => consuptionHandle(e)}
                ></textarea>
              </td>
              <td colSpan="1">
                <input 
                className="potrosnjaInpt" 
                type="text" 
                name="consuptionAmount"
                onChange={(e) => consuptionHandle(e)}
                />
              </td>
            </tr>
            <tr className="rashodi">
              <td colSpan="5">Ukupno</td>
              <td>{total}</td>
            </tr>
          </tbody>
        </table>
        <FrameButton>
          <AddProd onClick={() => Send()}>Snimi Smjenu</AddProd>
        </FrameButton>
      </FirstTableFrame>
    </FirstTableHolder>
  );
};

export default FirstTable;
