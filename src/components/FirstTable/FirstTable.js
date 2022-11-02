import { useEffect, useState } from "react";
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

useEffect(() => {
    GetDrinks()
      .then((res) => {
        res.data.map((item, indx) => {
          item.potrosnja = 0
          item.totalPrice = 0
          item.ostatak = 0
          item.potrosnja = 0
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

  item.potrosnja = number
  item.totalPrice = Number(item.potrosnja) * Number(item.price);
  item.ostatak = Number(item.carried) - Number(item.potrosnja);
  const newTotal = total - oldPrice + item.totalPrice;

  setProducts(productsCoppy);
  setTotal(newTotal.toFixed(2));
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
                  name="potrosnja"
                  onChange={(e) => Potrosnja(indx, e.target.value)} 
                  />
                </td>
                <td className="ostatak">{item.ostatak}</td>
                <td className="vrijednost">{item.totalPrice} KM</td>
              </tr>
            ))}
            <tr className="rashodi">
              <td colSpan="1">Rashodi</td>
              <td colSpan="4">
                <textarea
                  className="rashodiOpis"
                  placeholder="Navedi rashode"
                ></textarea>
              </td>
              <td colSpan="1">
                <input 
                className="potrosnjaInpt" 
                type="text" 
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
          <AddProd>Snimi Smjenu</AddProd>
        </FrameButton>
      </FirstTableFrame>
    </FirstTableHolder>
  );
};

export default FirstTable;
