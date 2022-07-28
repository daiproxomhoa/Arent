import { useState } from "react";

const DiaryBox = () => {
  const [data, setData] = useState(
    Array(8)
      .fill(0)
      .map(() => ({
        date: "2021.05.21",
        time: "23:25",
        content:
          "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
      }))
  );
  return (
    <div>
      <p className="h6 mb-2">MY DIARY</p>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-3">
        {data.map((item, index) => {
          return (
            <div key={index} className="p-4 border border-grey2">
              <p className="body1 mb-2">{item.date}</p>
              <p className="body1 mb-2">{item.time}</p>
              <p className="caption">{item.content} kcal</p>
            </div>
          );
        })}
      </div>
      <button
        className="btn mx-auto mt-8"
        onClick={() => {
          setData((one) => [...one, ...one]);
        }}
      >
        自分の日記をもっと見る
      </button>
    </div>
  );
};
export default DiaryBox;
