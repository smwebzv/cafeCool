import { AddNewFaqFrame, AddNewFaqHolder } from "./AddNewFaqStyle";

const AddNewFaq = () => {
    return(
        <AddNewFaqHolder>
            <AddNewFaqFrame>
                <table>
                    <thead>
                        <tr>
                            <th colSpan="6">Cool Caffe Fakture</th>
                        </tr>
                    </thead>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Robu Primio</th>
                            <th>Broj Fakture</th>
                            <th>Nabavljeno</th>
                            <th>Ukupno</th>
                            <th>Datum Nabavke</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Dijana</td>
                            <td>0</td>
                            <td></td>
                            <td>58 KM</td>
                            <td>28/Jul/2022</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td></td>
                            <td>0</td>
                            <td></td>
                            <td>57 KM</td>
                            <td>27/Jul/2022</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>nebojsa.dzinic</td>
                            <td>0</td>
                            <td></td>
                            <td>48 KM</td>
                            <td>26/Jul/2022</td>
                        </tr>
                    </tbody>
                </table>
            </AddNewFaqFrame>
        </AddNewFaqHolder>
    );
}

export default AddNewFaq;