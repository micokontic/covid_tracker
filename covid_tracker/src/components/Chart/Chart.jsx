import React, { useEffect } from "react";
import { fetchDailyData } from "../../api";
import { Line, Bar } from "react-chartjs-2";
import { StylesProvider } from "@material-ui/core";
import styles from "./Chart.module.css";
function Chart({ data, country }) {
  useEffect(async () => {
    //const data = await fetchDailyData();
  }, []);

  console.log(data);
  console.log(data.confirmed);
  console.log(country);

  return (
    <div className={styles.container}>
      <Bar
        data={{
          labels: ["Infected", "Recovered", "Deaths"],
          datasets: [
            {
              label: "People",
              backgroundColor: [
                "rgba(0, 0, 255, 0.5)",
                "rgba(0, 255, 0, 0.5)",
                "rgba(255, 0, 0, 0.5)",
              ],
              data: [data.confirmed, data.recovered, data.deaths],
            },
          ],
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: `Current state in ${country}` },
        }}
      />
    </div>
  );
}

export default Chart;
