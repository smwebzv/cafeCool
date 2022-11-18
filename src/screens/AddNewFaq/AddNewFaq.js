import { useEffect, useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import GetDrinks from "../../context/actions/drinkActions.js";
import {
  FakFrameFirst,
  FakBox,
  SelectDiv,
  DropDownContainer,
  DropDownListContainer,
  DropDownList,
  ListItem,
  HolderinputAndSelect,
  ButtonsFrame,
  SelectDivDostavljac,
  DropDownListContainerDostavljaca,
  DropDownListDostavljaca,
} from "./AddNewFaqStyle";
import { AppContext } from "../../context/application_context.js";
import Button from "../../components/Button/Button";
import SearchInput from "../../components/SearchInput/SearchInput.js";
import Menu from "../../components/Menu/Menu.js";
import {
  ShiftAndInputFrame,
  ShiftEntry,
} from "../DailyReports/DailyReportsStyle.js";

const AddNewFaq = () => {
  const { saveNewFaq } = useContext(AppContext);
  const [dropDownIndex, setDropDownIndex] = useState(-1);
  const [products, setProducts] = useState([]);
  const [numberFaqs, setNumberFaqs] = useState({});
  const [places, setPlace] = useState({});
  const [total, setTotal] = useState(0.0);

  const [dropDownDostavljaca, setDropDownDostavljaca] = useState(false);

  const [dostavljaci, setDostavljaci] = useState([
    {
      name: "Beoprom",
    },
    { name: "Srbija" },
    {
      name: "Bosna",
    },
  ]);
  console.log(dostavljaci);
  console.log(products);
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
  useEffect(() => {
    let newPrice = 0;
    let totalPrice = 0;
    dailyList.map((item) => {
      if (item.price) {
        newPrice = item.price;
        totalPrice = Number(totalPrice) + Number(newPrice);
      }
    });
    setTotal(totalPrice);
  }, [dailyList]);

  const changeDeliverer = (name, value) => {
    setDropDownDostavljaca(!dropDownDostavljaca);

    const data = places;

    data[name] = value;
    setPlace(data);
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
          <ShiftAndInputFrame>
            <NavLink to="/addDailyReports" style={{ textDecoration: "none" }}>
              <ShiftEntry>Unos fakture</ShiftEntry>
            </NavLink>
            <SearchInput />
          </ShiftAndInputFrame>

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
                <tr className="borderTop" key={indx1}>
                  <td>{indx1 + 1}.</td>
                  <td>
                    <DropDownContainer>
                      <SelectDiv
                        dropDownIndex={dropDownIndex}
                        onClick={() => toggling(indx1)}
                        onChange={(e) => handleChange(e, indx1)}
                        id="drinkId"
                        name="drinkId"
                      >
                        {item1?.drinkId || "Izaberi proizvod"}
                      </SelectDiv>
                      {dropDownIndex == indx1 && (
                        <DropDownListContainer>
                          {products.map((item, indx) => (
                            <DropDownList value={item.name} key={item.id}>
                              <ListItem
                                onClick={() => clickOption(indx1, item.name)}
                              >
                                {item.name}
                              </ListItem>
                            </DropDownList>
                          ))}
                        </DropDownListContainer>
                      )}
                    </DropDownContainer>
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
                <SelectDivDostavljac
                  onClick={() => dropDownDostavljac()}
                  className="selectItems"
                  name="selectItems"
                >
                  {places?.place ? places.place : "Izaberi proizvod..."}
                  {dropDownDostavljaca && (
                    <DropDownListContainerDostavljaca>
                      {dostavljaci.map((item) => (
                        <DropDownListDostavljaca key={item.id}>
                          <ListItem
                            onClick={() => changeDeliverer("place", item.name)}
                          >
                            {item.name}
                          </ListItem>
                        </DropDownListDostavljaca>
                      ))}
                      <DropDownListDostavljaca></DropDownListDostavljaca>
                    </DropDownListContainerDostavljaca>
                  )}
                </SelectDivDostavljac>
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
