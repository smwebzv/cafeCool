import Button from "../Button/Button";
import { TableExpensesFrame } from "./TableExpensesStyle";

const TableExpenses = ({
  consumptionDesc,
  disableInput,
  consumption,
  consuptionHandleDesc,
  consuptionHandleAmount,
  total,
  send,
}) => {
  return (
    <TableExpensesFrame>
      <table>
        <thead>
          <tr>
            <td>
              <textarea
                className="rashodiOpis"
                placeholder="Navedite rashode..."
                value={consumptionDesc}
                disabled={disableInput}
                onChange={(e) => consuptionHandleDesc(e)}
              ></textarea>
              <div className="input">
                <input
                  className="potrosnjaInpt"
                  type="text"
                  value={consumption}
                  disabled={disableInput}
                  onChange={(e) => consuptionHandleAmount(e)}
                />
              </div>
            </td>
          </tr>
          <tr>
            <td className="total">
              <div>Ukupno</div>
              <div className="totalSize">{total}</div>
            </td>
          </tr>
        </thead>
      </table>
      {!disableInput && (
        <Button name={"Snimi smjenu"} onClick={send} style="saveFaqs" />
      )}
    </TableExpensesFrame>
  );
};

export default TableExpenses;
