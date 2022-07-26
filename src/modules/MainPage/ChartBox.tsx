import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useEffect, useRef } from "react";

const ChartBox = () => {
  const ref = useRef<any>(null);
  useEffect(() => {
    ref.current?.chart?.reflow();
  });
  return (
    <>
      <HighchartsReact
        highcharts={Highcharts}
        ref={ref}
        options={{
          xAxis: {
            categories: [
              "6月",
              "7月",
              "8月",
              "9月",
              "10月",
              "11月",
              "12月",
              "1月",
              "2月",
              "3月",
              "4月",
              "5月",
            ],
            gridLineWidth: 1,
            tickInterval: 1,
            type: "linear",
          },
          yAxis: {
            labels: {
              enabled: false,
            },
            title: {
              enabled: false,
            },
            gridLineWidth: 0,
            opposite: true,
          },
          chart: { backgroundColor: "#2E2E2E" },
          legend: {
            enabled: false,
          },
          title: {
            text: "",
          },
          series: [
            {
              data: Array(12)
                .fill(0)
                .map(() => Math.round(Math.random() * 20)),
              color: "#8FE9D0",
            },
            {
              data: Array(12)
                .fill(0)
                .map(() => Math.round(Math.random() * 20)),
              color: "#FFCC21",
            },
          ],
        }}
      />
    </>
  );
};
export default ChartBox;
