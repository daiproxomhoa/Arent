import { useState } from "react";
import Image1 from "../../svg/new/column-1.jpg";
import Image2 from "../../svg/new/column-2.jpg";
import Image3 from "../../svg/new/column-3.jpg";
import Image4 from "../../svg/new/column-4.jpg";
import Image5 from "../../svg/new/column-5.jpg";
import Image6 from "../../svg/new/column-6.jpg";
import Image7 from "../../svg/new/column-7.jpg";
import Image8 from "../../svg/new/column-8.jpg";
const NewList = () => {
  const [data, setData] = useState([
    {
      image: Image1,
      title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      desc: "#魚料理  #和食  #DHA",
      time: "2021.05.17   23:25",
    },
    {
      image: Image2,
      title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      desc: "#魚料理  #和食  #DHA",
      time: "2021.05.17   23:25",
    },
    {
      image: Image3,
      title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      desc: "#魚料理  #和食  #DHA",
      time: "2021.05.17   23:25",
    },
    {
      image: Image4,
      title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      desc: "#魚料理  #和食  #DHA",
      time: "2021.05.17   23:25",
    },
    {
      image: Image5,
      title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      desc: "#魚料理  #和食  #DHA",
      time: "2021.05.17   23:25",
    },
    {
      image: Image6,
      title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      desc: "#魚料理  #和食  #DHA",
      time: "2021.05.17   23:25",
    },
    {
      image: Image7,
      title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      desc: "#魚料理  #和食  #DHA",
      time: "2021.05.17   23:25",
    },
    {
      image: Image8,
      title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      desc: "#魚料理  #和食  #DHA",
      time: "2021.05.17   23:25",
    },
  ]);
  return (
    <div>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-3">
        {data.map((item, index) => {
          return (
            <div key={index}>
              <div className="w-full max-h-36 relative overflow-hidden">
                <img
                  src={item.image}
                  alt="new_image"
                  className="h-full w-full object-cover text-white"
                />
                <div className="bg-primary px-2 py-1 absolute bottom-0 left-0 text-white">
                  {item.time}
                </div>
              </div>
              <p className="body1 my-2">{item.title}</p>
              <p className="caption text-primary2">{item.desc} kcal</p>
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
        コラムをもっと見る
      </button>
    </div>
  );
};
export default NewList;
