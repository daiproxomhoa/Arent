const ExerciseBox = () => {
  return (
    <div className="text-white bg-grey py-4 px-6">
      <p className="body1">
        MY EXERCISE &emsp;<span className="h5">2021.05.21</span>
      </p>
      <div className="grid grid-cols-2 gap-x-10 max-h-56 overflow-auto pr-6">
        {Array(100)
          .fill(0)
          .map(() => ({
            name: "家事全般（立位・軽い）",
            kcal: Math.floor(Math.random() * 100),
            time: Math.floor(Math.random() * 20),
          }))
          .map((item, index) => {
            return (
              <div
                key={index}
                className="flex gap-2 border-b border-white py-1 "
              >
                ●&nbsp;
                <div className="flex-1">
                  <p className="body1">{item.name}</p>
                  <p className="body1 text-primary">{item.kcal} kcal</p>
                </div>{" "}
                <p className="h6 text-primary">{item.time} min</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default ExerciseBox;
