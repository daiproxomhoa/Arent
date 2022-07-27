import { Outlet } from "react-router";
import MyLink from "../common/MyLink";
import { ROUTES } from "../routes";
import { InfoIcon, MemoIcon, LogoIcon, IconChallenge, IconMenu } from "../svg";

const DefaultLayout = () => {
  const Tabs = [
    {
      icon: <MemoIcon />,
      title: "自分の記録",
      path: ROUTES.memo,
    },
    {
      icon: <IconChallenge />,
      title: "チャレンジ",
      path: ROUTES.record,
    },
    {
      icon: (
        <div className="relative">
          <InfoIcon />
          <div
            className="bg-primary3 rounded-full h-4 w-4 absolute top-0 -right-1 text-white flex justify-center items-center"
            style={{ fontSize: 10, lineHeight: 12 }}
          >
            1
          </div>
        </div>
      ),
      title: "お知らせ",
      path: ROUTES.new,
    },
  ];

  return (
    <main className="flex flex-col min-h-screen overflow-y-auto overflow-x-hidden">
      <header className="flex bg-grey text-white">
        <div className="container flex items-center">
          <div className="flex-1 justify-start">
            <LogoIcon />
          </div>
          <div className="flex gap-4 items-center">
            {Tabs.map((item, index) => {
              return (
                <MyLink
                  to={item.path}
                  key={index}
                  className="flex gap-2 body1  items-center  text-white hover:text-primary"
                >
                  {item.icon}
                  {item.title}
                </MyLink>
              );
            })}
          </div>
          <div className="popper h-full flex justify-center items-center ml-8">
            <IconMenu />
            <div className={"popperContent popperContentLeft"} tabIndex={-1}>
              <div className="min-w-[280px] bg-grey2 text-white flex flex-col">
                {[
                  {
                    title: "自分の記録",
                    path: "",
                  },
                  {
                    title: "体重グラフ",
                    path: "",
                  },
                  {
                    title: "目標",
                    path: "",
                  },
                  {
                    title: "選択中のコース",
                    path: "",
                  },
                  {
                    title: "コラム一覧",
                    path: "",
                  },
                  {
                    title: "設定",
                    path: "",
                  },
                ].map((item, index) => {
                  return (
                    <MyLink
                      to={item.path}
                      key={index}
                      className="px-8 py-6 text-start border-b border-grey text-white hover:text-primary"
                    >
                      {item.title}
                    </MyLink>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="flex-1 h-full w-full flex flex-col">
        <Outlet />
      </div>
      <footer className="bg-grey text-white py-7">
        <div className="container flex gap-11 flex-wrap">
          {[
            {
              title: "会員登録",
              path: "",
            },
            {
              title: "運営会社",
              path: "",
            },
            {
              title: "利用規約",
              path: "",
            },
            {
              title: "個人情報の取扱について",
              path: "",
            },
            {
              title: "特定商取引法に基づく表記",
              path: "",
            },
            {
              title: "お問い合わせ",
              path: "",
            },
          ].map((item, index) => {
            return (
              <MyLink
                to={item.path}
                key={index}
                className="text-white hover:text-primary"
              >
                {item.title}
              </MyLink>
            );
          })}
        </div>
      </footer>
    </main>
  );
};

export default DefaultLayout;
