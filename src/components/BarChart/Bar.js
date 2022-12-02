import { Bar } from "react-chartjs-2";
import { useState } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { UserData } from "../../screens/Charts/Data.js";

const BarChart = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((item) => item.month),
    datasets: [
      {
        label: "Uporedi potrosnju",
        data: UserData.map((item) => item.userGain),
        options: {
          scales: {
            x: {
              stacked: true,
            },
            y: {
              stacked: false,
            },
          },
        },
      },
      {
        label: "Days",
        data: UserData.map((item) => item.userGain),
        borderWidth: 3,
        borderDash: [170, 0],
        pointBackgroundColor: "#0A3CBB80",
        type: "line",
      },
    ],
  });
  return <Bar data={userData} />;
};

export default BarChart;
