import { useEffect, useState, useContext } from "react";
import GetDrinks from "../../context/actions/drinkActions.js";
import {
  AddProd,
  ButtonsFrame,
  FakBox,
  FakFrame,
  FakFrameFirst,
  FakHeader,
  FakTitle,
} from "./AddNewFaqStyle";
import { AppContext } from "../../context/application_context.js";

const AddNewFaq = () => {
  const { saveNewFaq } = useContext(AppContext);
  const [products, setProducts] = useState([]);
  const [numberFaqs, setNumberFaqs] = useState({});
  const [places, setPlace] = useState({});
  const [total, setTotal] = useState(0.0);
  const [dailyList, setDailyList] = useState([
    {
      drinkId: "",
      quantity: 0,
      price: 0,
    },
  ]);

  useEffect(() => {
    GetDrinks()
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleAddRow = () => {
    const item = {
      drinkId: "",
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
      if (item.price) {
        newPrice = item.price;
        totalPrice = parseInt(totalPrice) + parseInt(newPrice);
      }
    });
    setTotal(totalPrice);
  }, [dailyList]);

  const changeDeliverer = (e) => {
    const { name, value } = e.target;
    const data = places;
    data[name] = value;
    setPlace(data);
    console.log(data);
  };

  const inputFaqs = (e) => {
    const { name, value } = e.target;
    const data = numberFaqs;
    data[name] = value;
    console.log(data);
    setNumberFaqs(data);
  };

  const saveFaqss = () => {
    const data = {
      total: Number(total),
      dailyList: dailyList,
      number: numberFaqs.inputFaqs,
      place: places.selectItems,
    };

    console.log(data);
    saveNewFaq(data);
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
              <option value="default" hidden>
                Odaberite dostavljaca
              </option>
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
                    <select
                      onChange={(e) => handleChange(e, indx1)}
                      className="selectProd"
                      id="drinkId"
                      name="drinkId"
                    >
                      <option value="default" hidden>
                        Izaberi proizvod
                      </option>
                      {products.map((item) => (
                        <option value={item.name} key={item.id}>
                          {item.name}
                        </option>
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
            <AddProd onClick={() => saveFaqss()} className="saveFak">
              Sačuvaj Fakturu
            </AddProd>
          </ButtonsFrame>
        </FakBox>
      </FakFrame>
    </FakFrameFirst>
  );
};

export default AddNewFaq;
