import MyLink from "../../common/MyLink";
import { IconCup, IconKnife, MainPhoto } from "../../svg";
import ChartBox from "./ChartBox";
import FoodList from "./FoodList";

const MainPage = () => {
  return (
    <div>
      <div className="flex flex-grow">
        <img src={MainPhoto} alt="main_photo" className="object-cover" />
        <div className="flex-1 block">
          <ChartBox />
        </div>
      </div>
      <div className="container">
        <div className="flex flex-wrap gap-20 my-6 justify-center">
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
                  className="flex flex-col justify-center items-center h-36 w-36 background-btn text-white h5 mx-auto"
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
        <FoodList />
      </div>
    </div>
  );
};
export default MainPage;
