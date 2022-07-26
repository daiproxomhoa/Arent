import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useEffect, useRef, useState } from "react";

const ChartBox = () => {
  const [filter, setFilter] = useState<number>(0);
  const ref = useRef<any>(null);
  useEffect(() => {
    ref.current?.chart?.reflow();
  });
  return (
    <div className="text-white bg-grey  py-4 px-6">
      <p className="body1">
        BODY RECORD &emsp;<span className="h5">2021.05.21</span>
      </p>
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
          title: {
            text: "",
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
          chart: { backgroundColor: "#414141" },
          legend: {
            enabled: false,
          },

          series: [
            {
              data: Array(12)
                .fill(0)
                .map(() => Math.random() * 20),
              color: "#8FE9D0",
            },
            {
              data: Array(12)
                .fill(0)
                .map(() => Math.random() * 20),
              color: "#FFCC21",
            },
          ],
        }}
      />
      <div className="flex gap-4">
        {[
          {
            text: "日",
          },
          {
            text: "週",
          },
          {
            text: "月",
          },
          {
            text: "年",
          },
        ].map((item, index) => {
          return (
            <button
              key={index}
              className={
                "rounded-xl flex items-center justify-center w-14 h-6 " +
                (filter === index
                  ? "bg-white text-primary"
                  : "bg-primary text-white")
              }
              onClick={() => {
                setFilter(index);
              }}
            >
              {item.text}
            </button>
          );
        })}
      </div>
    </div>
  );
};
export default ChartBox;
