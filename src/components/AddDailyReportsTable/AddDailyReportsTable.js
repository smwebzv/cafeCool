import { AddDailyReportsTableFrame } from "./AddDailyReportsTableStyle";

const AddDailyReportsTable = ({products, consumption, disableInput, potrosnja }) => {
    return (
        <AddDailyReportsTableFrame>
            <table>
                <thead>
                    <tr>
                        <th>Naziv Artikla</th>
                        <th>Cijena</th>
                        <th>Preneseno</th>
                        <th style={{ width: "35px" }}></th>
                        <th>Potrošnja</th>
                        <th>Ostatak</th>
                        <th>Vrijednost</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((item, indx) => (
                        <tr key={indx}>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.carried}</td>
                            <td style={{ width: "35px" }}></td>
                            <td>
                                <input
                                    className="potrosnjaInpt"
                                    type="text"
                                    name="consumption"
                                    value={item.consumption}
                                    disabled={disableInput}
                                    onChange={(e) => potrosnja(indx, e.target.value)}
                                />
                            </td>
                            <td className="ostatak">{item.remaind}</td>
                            <td className="vrijednost">{item.totalPrice.toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </AddDailyReportsTableFrame>
    );
}

export default AddDailyReportsTable;