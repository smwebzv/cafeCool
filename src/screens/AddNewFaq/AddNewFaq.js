import { AppContext } from "../../context/application_context.js";
import { useEffect, useState, useContext } from "react";
import GetDrinks from "../../context/actions/drinkActions.js";
import {
  FakFrameFirst,
  FakBox,
  HolderinputAndSelect,
  ButtonsFrame,
} from "./AddNewFaqStyle";
import Button from "../../components/Button/Button";
import SearchInput from "../../components/SearchInput/SearchInput.js";
import Menu from "../../components/Menu/Menu.js";
import SelectDrinks from "../../components/Select/SelectDrinks.js";
import SelectDeliverer from "../../components/Select/SelectDeliverer.js";

const AddNewFaq = () => {
  const { saveNewFaq } = useContext(AppContext);
  const [dropDownIndex, setDropDownIndex] = useState(-1);
  const [products, setProducts] = useState([]);
  const [numberFaqs, setNumberFaqs] = useState({});
  const [places, setPlace] = useState({});
  const [total, setTotal] = useState(0.0);
  const [dropDownDostavljaca, setDropDownDostavljaca] = useState(false);

  const [deliverers, setDeliverers] = useState([
    {
      id: 1,
      name: "Beoprom",
    },
    { id: 2, name: "Srbija" },
    {
      id: 3,
      name: "Bosna",
    },
  ]);

  const dropDownDostavljac = () => {
    setDropDownDostavljaca(!dropDownDostavljaca);
  };

  const [dailyList, setDailyList] = useState([
    {
      drinkId: "",
      quantity: 0,
      price: 0,
    },
  ]);
  const toggling = (index) => {
    let i = dropDownIndex === index ? -1 : index;
    setDropDownIndex(i);
  };

  const clickOption = (index, value) => {
    let list = [...dailyList];
    let optionName = value;
    list[index].drinkId = optionName;
    setDailyList(list);
    setDropDownIndex(-1);
  };

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
  };

  const handleChange = (e, indx) => {
    const dailyListCoppy = dailyList.slice();
    dailyListCoppy[indx][e.target.name] = e.target.value;
    setDailyList(dailyListCoppy);
  };

  // useEffect(() => {
  //   let newPrice = 0;
  //   let totalPrice = 0;
  //   dailyList.map((item) => {
  //     if (item.price) {
  //       newPrice = item.price;
  //       totalPrice = Number(totalPrice) + Number(newPrice);
  //     }
  //   });
  //   setTotal(totalPrice);
  // }, [dailyList]);

  const changeDeliverer = (name, value) => {
    const data = places;
    data[name] = value;
    setPlace(data);
    setDropDownDostavljaca(!dropDownDostavljaca);
  };

  const inputFaqs = (e) => {
    const { name, value } = e.target;
    const data = numberFaqs;
    data[name] = value;
    setNumberFaqs(data);
  };

  const saveFaqss = () => {
    const data = {
      total: Number(total),
      dailyList: dailyList,
      number: numberFaqs.inputFaqs,
      place: places.selectItems,
    };
    saveNewFaq(data);
  };

  return (
    <>
      <Menu />
      <FakFrameFirst>
        <FakBox>
          <SearchInput name={"Unos fakture"} hiddeAddButton="true" />
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
                    <SelectDrinks
                      products={products}
                      dailyList={dailyList}
                      toggling={toggling}
                      clickOption={clickOption}
                      dropDownIndex={dropDownIndex}
                      item1={item1}
                      indx1={indx1}
                    />
                  </td>
                  <td>
                    <input
                      className="quantity"
                      type="number"
                      name="quantity"
                      placeholder="0"
                      onChange={(e) => handleChange(e, indx1)}
                    />
                  </td>
                  <td>
                    <input
                      className="price"
                      type="number"
                      name="price"
                      placeholder="0"
                      onChange={(e) => handleChange(e, indx1)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <HolderinputAndSelect dropDownDostavljaca={dropDownDostavljaca}>
            <div className="inputAndSelect">
              <input
                onChange={(e) => inputFaqs(e)}
                className="fakNumber"
                type="text"
                placeholder="Unesi broj fakture..."
                name="inputFaqs"
              ></input>
              <div className="selectDiv">
                <SelectDeliverer
                  deliverers={deliverers}
                  dropDownDostavljac={dropDownDostavljac}
                  places={places}
                  dropDownDostavljaca={dropDownDostavljaca}
                  changeDeliverer={changeDeliverer}
                />
              </div>
            </div>
          </HolderinputAndSelect>
          <ButtonsFrame>
            <Button name={"Novi Proizvod "} onClick={() => handleAddRow()} />
            <Button
              name={"Sačuvaj Fakturu"}
              onClick={() => saveFaqss()}
              style="saveFak"
            />
          </ButtonsFrame>
        </FakBox>
      </FakFrameFirst>
    </>
  );
};

export default AddNewFaq;
