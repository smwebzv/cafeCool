import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DailyReportsFrame, TableAndInputFrame } from "./DailyReportsStyle";
import {
  DeleteDailyReports,
  GetDailyReports,
} from "../../context/actions/dailyReportsActions";
import { AppContext } from "../../context/application_context";
import Menu from "../../components/Menu/Menu";
import SearchInput from "../../components/SearchInput/SearchInput";
import DailyReportsTable from "../../components/DailyReportsTable/DailyReportsTable";

const DailyReports = (props) => {
  let navigate = useNavigate();
  const { dailyReportsDispatch, dailyReportsState } = useContext(AppContext);
  const [dailyReports, setDailyReports] = useState([]);
  const [hover, setHover] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1);
  const [sortDate, setSortDate] = useState("asc");

  const DailyReports = () => {
    GetDailyReports()
      .then((res) => {
        console.log("WHAT IS DATA");
        console.log(res);
        dailyReportsDispatch({ type: "setDailyList", payload: res.data });
        setDailyReports(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    DailyReports();
  }, []);

  const UpdateSpecificFaq = (item, indx) => {
    navigate("/unos-smene", { state: { list: item, indx } });
  };
  const OpenSpecificFaq = (item) => {
    navigate("/unos-smene", { state: { list: item, disableInput: true } });
  };

  const Delete = (id, indx) => {
    DeleteDailyReports(id)
      .then((res) => {
        dailyReportsDispatch({ type: "removeDailyItem", payload: indx });
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const hovered = (indx) => {
    setHover(true);
    setSelectedItemIndex(indx);
  };

  const notHovered = () => {
    setHover(false);
    setSelectedItemIndex(-1);
  };

  const sortByDate = () => {
    if (sortDate === "asc") {
      setDailyReports(
        dailyReports.slice().sort((a, b) => {
          return new Date(b.date) - new Date(a.date);
        })
      );
      setSortDate("desc");
    }

    if (sortDate === "desc") {
      setDailyReports(
        dailyReports.slice().sort((a, b) => {
          return new Date(a.date) - new Date(b.date);
        })
      );
      setSortDate("asc");
    }
  };

  return (
    <DailyReportsFrame>
      <Menu />
      <TableAndInputFrame>
        <SearchInput name={"Dnevni izvjestaji"} route={"/unos-smene"} />
        <DailyReportsTable
          sortByDate={sortByDate}
          sortDate={sortDate}
          dailyReports={dailyReports}
          hovered={hovered}
          notHovered={notHovered}
          selectedItemIndex={selectedItemIndex}
          OpenSpecificFaq={OpenSpecificFaq}
          UpdateSpecificFaq={UpdateSpecificFaq}
          Delete={Delete}
        />
      </TableAndInputFrame>
    </DailyReportsFrame>
  );
};

export default DailyReports;
