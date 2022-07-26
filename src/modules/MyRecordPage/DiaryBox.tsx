const DiaryBox = () => {
  return (
    <div>
      <p className="h6 mb-2">MY DIARY</p>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-3">
        {Array(8)
          .fill(0)
          .map(() => ({
            title: "2021.05.21   23:25",
            content:
              "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
          }))
          .map((item, index) => {
            return (
              <div key={index} className="p-4 border border-grey2">
                <p className="body1 mb-2">{item.title}</p>
                <p className="caption">{item.content} kcal</p>
              </div>
            );
          })}
      </div>
      <button className="btn mx-auto mt-8">自分の日記をもっと見る</button>
    </div>
  );
};
export default DiaryBox;
