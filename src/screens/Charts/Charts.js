import BarChart from "../../components/BarChart/Bar";
import Menu from "../../components/Menu/Menu";
import { HolderBarChart, HolderGraf, HolderInputs } from "./ChartsStyle";
import {} from "./ChartsStyle";

const Charts = () => {
  return (
    <HolderGraf>
      <Menu />
      <HolderBarChart>
        {/* <HolderInputs>
          Uporedi potrosnju
          <input type="date" />
        </HolderInputs> */}
        <BarChart />
      </HolderBarChart>
    </HolderGraf>
  );
};

export default Charts;
