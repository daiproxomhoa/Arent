import { useState } from "react";
import Image1 from "../../svg/main/1.jpg";
import Image2 from "../../svg/main/2.jpg";
import Image3 from "../../svg/main/3.jpg";
import Image4 from "../../svg/main/4.jpg";
import Image5 from "../../svg/main/5.jpg";
import Image6 from "../../svg/main/6.jpg";
import Image7 from "../../svg/main/7.jpg";

const FoodList = () => {
  const [data, setData] = useState([
    {
      icon: Image1,
      label: "05.21.Morning",
    },
    {
      icon: Image2,
      label: "05.21.Lunch",
    },
    {
      icon: Image3,
      label: "05.21.Dinner",
    },
    {
      icon: Image4,
      label: "05.21.Snack",
    },
    {
      icon: Image1,
      label: "05.20.Morning",
    },
    {
      icon: Image5,
      label: "05.20.Lunch",
    },
    {
      icon: Image6,
      label: "05.20.Dinner",
    },
    {
      icon: Image7,
      label: "05.21.Snack",
    },
  ]);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mb-7">
        {data.map((item, index) => {
          return (
            <div key={index}>
              <img src={item.icon} alt="food" className="w-full" />
            </div>
          );
        })}
      </div>
      <div className="flex justify-center mb-16">
        <button
          className="btn"
          onClick={() => {
            setData((one) => [...one, ...one]);
          }}
        >
          記録をもっと見る
        </button>
      </div>
    </>
  );
};
export default FoodList;
