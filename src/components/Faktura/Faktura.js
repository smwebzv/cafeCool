import { useEffect, useRef, useState } from "react";
import storeProducts from "../../utils/Data.js";
import {
  AddProd,
  ButtonsFrame,
  FakBox,
  FakFrame,
  FakFrameFirst,
  FakHeader,
  FakTitle,
} from "./FakturaStyle";

const Faktura = () => {
  const [products, setProducts] = useState(storeProducts);
  const [numberFaqs, setNumberFaqs] = useState(null);
  const [places, setPlace] = useState("");
  const [dailyList, setDailyList] = useState([
    {
      names: "",
      quantity: 0,
      price: 0,
    },
  ]);

  const [total, setTotal] = useState(0.0);
  const handleAddRow = () => {
    const item = {
      names: "",
      quantity: 0,
      price: 0,
    };
    setDailyList([...dailyList, item]);
    console.log(dailyList);
  };

  const handleChange = (e, indx) => {
    const dailyListCoppy = dailyList.slice();
    dailyListCoppy[indx][e.target.name] = e.target.value;
    setDailyList(dailyListCoppy);
  };

  useEffect(() => {
    let newPrice = 0;
    let totalPrice = 0;
    dailyList.map((item) => {
      if (item.price && item.quantity) {
        newPrice = parseInt(item.quantity) * item.price;
        totalPrice = newPrice + totalPrice;
      }
    });
    setTotal(totalPrice.toFixed(2));
  }, [dailyList]);

  const changeDeliverer = (e) => {
    let options = e.target.value;
    setPlace(options);
    console.log(options);
  };

  const inputFaqs = (e) => {
    const number = e.target.value;
    setNumberFaqs(number);
    console.log(numberFaqs);
  };
  return (
    <FakFrameFirst>
      <FakFrame>
        <FakHeader>Cool Caffe</FakHeader>
        <FakBox>
          <FakTitle>Unos Fakture</FakTitle>
          <div className="inputAndSelect">
            <input
              onChange={(e) => inputFaqs(e)}
              className="fakNumber"
              type="text"
              placeholder="Unesi broj fakture"
              name="inputFaqs"
            ></input>
            <select
              className="selectItems"
              onChange={(value) => changeDeliverer(value)}
              name="selectItems"
            >
              <option value="Beoprom">Beoprom</option>
              <option value="Srbija">Srbija</option>
              <option value="Market">Market</option>
            </select>
          </div>
          <table>
            <thead>
              <tr>
                <th>RB</th>
                <th>Naziv</th>
                <th>Kolicina</th>
                <th>Cijena</th>
              </tr>
            </thead>
            <tbody>
              {dailyList.map((item1, indx1) => (
                <tr key={indx1}>
                  <td>{indx1 + 1}.</td>
                  <td>
                    <select className="selectProd">
                      <option>Izaberi proizvod</option>
                      {products.map((item, indx) => (
                        <option key={indx}>{item.prodName}</option>
                      ))}
                    </select>
                  </td>
                  <td>
                    <input
                      className="quantity"
                      type="number"
                      name="quantity"
                      placeholder="Unesi kolicinu"
                      onChange={(e) => handleChange(e, indx1)}
                    />
                  </td>
                  <td>
                    <input
                      className="price"
                      type="number"
                      name="price"
                      placeholder="Unesi cijenu"
                      onChange={(e) => handleChange(e, indx1)}
                    />{" "}
                    KM
                  </td>
                </tr>
              ))}
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td style={{ fontWeight: "bold", fontSize: "20px" }}>
                  {total} KM
                </td>
              </tr>
            </tbody>
          </table>

          <ButtonsFrame>
            <AddProd onClick={() => handleAddRow()}>Novi Proizvod</AddProd>
            <AddProd className="saveFak">Sačuvaj Fakturu</AddProd>
          </ButtonsFrame>
        </FakBox>
      </FakFrame>
    </FakFrameFirst>
  );
};

export default Faktura;
