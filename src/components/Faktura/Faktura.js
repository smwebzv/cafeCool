import { useEffect, useRef, useState } from "react";
import storeProducts from "../../utils/Data.js"
import { AddProd, ButtonsFrame, FakBox, FakFrame, FakFrameFirst, FakHeader, FakTitle } from "./FakturaStyle";

const Faktura = () => {

    const [products, setProducts] = useState(storeProducts);
    const [rows, setRows] = useState([{
        names: "",
        quantity: 0,
        price: 0
    }]);
    const [total, setTotal] = useState(0.00);

    
    const handleAddRow = () => {
        const item = {
            names: "",
            quantity: 0,
            price: 0
        }
        setRows([...rows, item]);
        console.log(rows);
    };

    const handleChange = (e, indx) => {
        const rowsCoppy = rows.slice();
        rowsCoppy[indx][e.target.name] = e.target.value;
        setRows(rowsCoppy);
    }

    useEffect(() => {
            let newPrice = 0
            rows.map((item) =>
            {
                if(item.price){
                    newPrice = newPrice + parseInt(item.price)
                }
            }
            )
           setTotal(newPrice.toFixed(2));
           console.log(rows);
    }, [rows])

    return (
        <FakFrameFirst>
            <FakFrame>
                <FakHeader>Cool Caffe</FakHeader>
                <FakBox>
                    <FakTitle>Unos Fakture</FakTitle>
                    <div className="inputAndSelect">
                        <input className="fakNumber" type="text" placeholder="Unesi broj fakture" ></input>
                        <select className="selectItems">
                            <option>Izaberi dobavljaca</option>
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
                            {
                                rows.map((item1, indx1) =>
                            <tr key={indx1}>
                                <td>{indx1 + 1}.</td>
                                <td>
                                    <select className="selectProd">
                                        <option>Izaberi proizvod</option>
                                        {
                                            products.map((item, indx) =>
                                                <option key={indx}>{item.prodName}</option>
                                            )
                                        }
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
                                    /> KM
                                </td>
                            </tr>
                            )
                            }
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td style={{fontWeight: "bold", fontSize: "20px"}}>{total} KM</td>
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
}

export default Faktura;