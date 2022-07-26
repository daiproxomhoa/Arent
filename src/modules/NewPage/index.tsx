import NewBox from "./NewBox";

const NewPage = () => {
  return (
    <div className="container py-14 flex flex-col gap-14">
      <div className="grid grid-cols-4 gap-8">
        {[
          {
            label: "RECOMMENDED COLUMN",
            desc: "オススメ",
          },
          {
            label: "RECOMMENDED DIET",
            desc: "ダイエット",
          },
          {
            label: "RECOMMENDED BEAUTY",
            desc: "美容",
          },
          {
            label: "RECOMMENDED HEALTH",
            desc: "健康",
          },
        ].map((item, index) => {
          return (
            <div
              key={index}
              className="bg-grey3 py-6 px-2 text-center flex flex-col items-center gap-2"
            >
              <p className="h4 text-primary">{item.label}</p>
              <div className="border-b w-14" />
              <p className="h6 text-white">{item.desc}</p>
            </div>
          );
        })}
      </div>
      <NewBox />
    </div>
  );
};
export default NewPage;
