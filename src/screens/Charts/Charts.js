import BarChart from "../../components/BarChart/Bar";
import Menu from "../../components/Menu/Menu";
import { HolderBarChart } from "./ChartsStyle";
import { HolderGraf } from "./ChartsStyle";

const Charts = () => {
  return (
    <HolderGraf>
      <Menu />
      <HolderBarChart>
        <BarChart />
      </HolderBarChart>
    </HolderGraf>
  );
};

export default Charts;
