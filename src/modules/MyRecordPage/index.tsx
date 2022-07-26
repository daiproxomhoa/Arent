import Image1 from "../../svg/record/MyRecommend-1.jpg";
import Image2 from "../../svg/record/MyRecommend-2.jpg";
import Image3 from "../../svg/record/MyRecommend-3.jpg";
import ChartBox from "./ChartBox";
import DiaryBox from "./DiaryBox";
import ExerciseBox from "./ExerciseBox";

const MyRecordPage = () => {
  return (
    <div className="container py-14 flex flex-col gap-14">
      <div className=" grid grid-cols-3 gap-12">
        {[
          {
            icon: Image1,
            label: "BODY RECORD",
            desc: "自分のカラダの記録",
          },
          {
            icon: Image2,
            label: "MY EXERCISE",
            desc: "自分の運動の記録",
          },
          {
            icon: Image3,
            label: "MY DIARY",
            desc: "自分の日記",
          },
        ].map((item, index) => {
          return (
            <div
              key={index}
              className="border-[24px] border-primary relative h-72 bg-cover"
              style={{
                backgroundImage: `url("${item.icon}")`,
                mixBlendMode: "luminosity",
              }}
            >
              <div className="absolute inset-0 flex flex-col justify-center items-center z-20">
                <div className="h5 text-primary mb-3">{item.label}</div>
                <div className="h5 text-white bg-primary2 px-2 py-1">
                  {item.desc}
                </div>
              </div>
              <div
                className="absolute inset-0 bg-black opacity-50 grayscale"
                style={{
                  mixBlendMode: "luminosity",
                }}
              />
            </div>
          );
        })}
      </div>
      <ChartBox />
      <ExerciseBox />
      <DiaryBox />
    </div>
  );
};
export default MyRecordPage;
