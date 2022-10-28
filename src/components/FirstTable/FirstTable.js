import { useEffect, useState } from "react";
import GetDrinks from "../../actions/drinkActions";
import { AddProd } from "../Faktura/FakturaStyle";
import { FirstTableFrame, FirstTableHolder, FrameButton } from "./FirstTableStyle";


const FirstTable = () => {

    const [products, setProducts] = useState([]);

    useEffect(()=> {
        GetDrinks().then((res)=>{
          setProducts(res.data);
          console.log(res.data);
        }).catch((err)=> {
          console.log(err);
        })
      }, [])
    


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
                                    <td className="ime">{item.name}</td>
                                    <td className="cijena">{item.price}</td>
                                    <td className="preneseno">{item.carried}</td>
                                    <td className="potrosnja">
                                        <input
                                            className="potrosnjaInpt"
                                            type="text"
                                        />
                                    </td>
                                    <td className="ostatak"></td>
                                    <td className="vrijednost"> KM</td>
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
