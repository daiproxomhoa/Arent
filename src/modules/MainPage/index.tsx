import MyLink from "../../common/MyLink";
import { IconCup, IconKnife, MainPhoto } from "../../svg";
import Image1 from "../../svg/main/1.jpg";
import Image2 from "../../svg/main/2.jpg";
import Image3 from "../../svg/main/3.jpg";
import Image4 from "../../svg/main/4.jpg";
import Image5 from "../../svg/main/5.jpg";
import Image6 from "../../svg/main/6.jpg";
import Image7 from "../../svg/main/7.jpg";
import ChartBox from "./ChartBox";

const MainPage = () => {
  return (
    <div>
      <div className="flex">
        <img src={MainPhoto} alt="main_photo" className="object-cover" />
        <div className="flex-1">
          <ChartBox />
        </div>
      </div>
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 my-6">
          {[
            {
              title: "Morning",
              path: "",
              icon: <IconKnife />,
            },
            {
              title: "Lunch",
              path: "",
              icon: <IconKnife />,
            },
            {
              title: "Dinner",
              path: "",
              icon: <IconKnife />,
            },
            {
              title: "Snack",
              path: "",
              icon: <IconCup />,
            },
          ].map((item, index) => {
            return (
              <MyLink to={item.path} key={index}>
                <div
                  className="flex flex-col justify-center items-center h-36 w-36 background-btn text-white h5"
                  style={{
                    clipPath:
                      "polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%)",
                  }}
                >
                  {item.icon}
                  {item.title}
                </div>
              </MyLink>
            );
          })}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mb-7">
          {[
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
          ].map((item, index) => {
            return (
              <div key={index}>
                <img src={item.icon} alt="food" className="w-full" />
              </div>
            );
          })}
        </div>
        <div className="flex justify-center mb-16">
          <button className="btn">記録をもっと見る</button>
        </div>
      </div>
    </div>
  );
};
export default MainPage;
