import { Bar } from "react-chartjs-2";
import { useState } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { UserData } from "../../screens/Charts/Data.js";

const BarChart = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((item) => item.month),

    options: {
      plugins: {
        tooltip: {
          enabled: false, // <-- this option disables tooltips
        },
        legend: false,
        datalabels: {
          formatter: UserData.map((item) => {
            return item.userGain;
          }),
        },
      },
      scales: {
        x: {
          scaleLabel: {
            display: false,
          },
          grid: {
            display: false,
          },
        },
        y: {
          grid: {
            display: false,
          },
          ticks: {
            color: "transparent",
          },
        },
      },
      // plugins: {
      //   datelabels: {
      //     formatter: UserData,
      //   },
      // },
    },

    datasets: [
      {
        label: {
          enabled: false,
        },
        data: UserData.map((item) => item.userGain),
        backgroundColor: "#D9D9D9",
        hoverBackgroundColor: ["#fff", "#000", "#1f3260"],
        barThickness: 40,
      },
      {
        label: "Days",
        data: UserData.map((item) => item.userGain),
        borderWidth: 2,
        borderDash: [170, 0],
        pointBorderColor: "transparent",
        type: "line",
        borderColor: "#0A3CBB80",
        order: 1,
        options: {},
      },
    ],
  });
  return (
    <Bar width={900} height={200} data={userData} options={userData.options} />
  );
};

export default BarChart;
