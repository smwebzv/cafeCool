import { useEffect, useRef, useState } from "react";
import { AddProd } from "../Faktura/FakturaStyle";
import storeProducts from "../../utils/Data.js"
import { FirstTableFrame, FirstTableHolder, FrameButton } from "./FirstTableStyle";

const FirstTable = (props) => {

    const [products, setProducts] = useState(storeProducts);
    const [total, setTotal] = useState(0);
    const [savedData, setSavedData] = useState([]);
    const inputRef = useRef();

    /*useEffect(() => {
        localStorage.setItem('savedData', JSON.stringify(savedData));
        console.log(savedData);
    }, [savedData]);*/


    /*useEffect(() => {
        const items = JSON.parse(localStorage.getItem('savedData'));
        if (savedData) {
         setSavedData(savedData);
        }
      }, []);*/

      /*const save = (e) => {
        const oldSave = savedData.slice();
        oldSave.push ({
            potrosnja: e?.target.value
        });
        setSavedData(oldSave);
        console.log(oldSave);
      }*/

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
                        {
                            products.map((item, indx) =>
                                <tr key={indx}>
                                    <td className="ime">{item.prodName}</td>
                                    <td className="cijena">{item.prodPrice}</td>
                                    <td className="preneseno">{item.prodCondition}</td>
                                    <td className="potrosnja">
                                        <input
                                            className="potrosnjaInpt"
                                            type="text"
                                            name="potrosnja"
                                            /*onChange={(e) => save(e)}*/
                                        />
                                    </td>
                                    <td className="ostatak">{item.prodRest}</td>
                                    <td className="vrijednost">{total} KM</td>
                                </tr>
                            )
                        }
                        <tr className="rashodi">
                            <td colSpan="1">Rashodi</td>
                            <td colSpan="4"><textarea className="rashodiOpis" placeholder="Navedi rashode"></textarea></td>
                            <td colSpan="1"><input className="potrosnjaInpt" type="text" /></td>
                        </tr>
                        <tr className="rashodi">
                            <td colSpan="5">Ukupno</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                <FrameButton>
                    <AddProd>Snimi Smjenu</AddProd>
                </FrameButton>
            </FirstTableFrame>
        </FirstTableHolder>
    );
}

export default FirstTable;